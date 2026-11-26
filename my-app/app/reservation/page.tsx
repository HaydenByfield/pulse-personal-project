
"use client";

import { useState } from "react";

export default function Reservation() {
  const [terms_agreements, setTerms_Agreements] = useState(false);
  const [preferences, setPreferences] = useState(false);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guest, setGuest] = useState<number>(2);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReservation(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          time,
          guest,
          firstname,
          lastname,
          phone,
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setSuccess(data.message);

      // Clear form after successful submission
      setDate("");
      setTime("");
      setGuest(2);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTerms_Agreements(false);
      setPreferences(false);

    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Format the date for the reservation summary
  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    : "Not selected";

  return (
    <main className="relative flex min-h-screen w-full min-w-0 overflow-x-clip bg-fifth">
      <div className="relative hidden 2xl:block 2xl:w-[28%] 2xl:shrink-0">
        <img
          src="/images/italian-background2.jpg"
          alt="Italian restaurant interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-16 left-8 z-10 text-white">
          <h1 className="font-script text-7xl">
            Le-Monte
          </h1>
          <p className="mt-3 max-w-sm font-serif text-xl leading-relaxed">
            Warmest of welcomes. It is our greatest pleasure to have you join us.
          </p>
        </div>
      </div>

      <section className="flex min-w-0 flex-1 flex-col justify-center px-4 py-10 text-fourth sm:px-8 md:px-12 lg:px-10">
        <div className="mx-auto w-full max-w-2xl">
          <header className="mb-8">
            <h2 className="font-serif text-3xl font-bold italic text-third sm:text-4xl md:text-5xl">
              Reservation
            </h2>
            <h3 className="mt-2 font-serif text-2xl font-bold italic sm:text-3xl">
              A Table Just For You
            </h3>
            <p className="mt-3 font-serif text-base sm:text-lg">
              Choose your moment. We'll take care of the rest.
            </p>
          </header>
          <form
            onSubmit={handleReservation}
            className="flex flex-col gap-5"
          >
            <h3 className="font-serif text-xl font-bold text-third sm:text-2xl">
              Your Evening
            </h3>
            <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="col-span-2 h-12 min-w-0 bg-white px-3 font-cinzel text-sm text-black sm:text-base"
              />
              <input
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-12 min-w-0 bg-white px-3 font-cinzel text-sm text-black sm:text-base"
              />
              <select
                value={guest}
                onChange={(e) => setGuest(Number(e.target.value))}
                className="h-12 min-w-0 bg-white px-2 text-sm text-black sm:text-base"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                  <option key={number} value={number}>
                    {number} {number === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
              <input
                type="text"
                required
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="h-12 min-w-0 bg-white px-3 font-cinzel text-sm text-black sm:text-base"
              />
              <input
                type="text"
                required
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                className="h-12 min-w-0 bg-white px-3 font-cinzel text-sm text-black sm:text-base"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Mobile number"
                className="col-span-2 h-12 min-w-0 bg-white px-3 font-cinzel text-sm text-black sm:text-base"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="col-span-2 h-12 min-w-0 bg-white px-3 font-cinzel text-sm text-black sm:text-base"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms_agreements"
                checked={terms_agreements}
                onChange={(e) => setTerms_Agreements(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0"
              />
              <label htmlFor="terms_agreements" className="font-serif text-sm sm:text-base">
                I agree to the Terms of Use and acknowledge the Privacy Policy.
              </label>
            </div>
            <hr className="border-fourth/20" />
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="preferences"
                checked={preferences}
                onChange={(e) => setPreferences(e.target.checked)}
                className="mt-1 h-5 w-5 shrink-0"
              />
              <label htmlFor="preferences" className="font-serif text-sm sm:text-base">
                Save these dining preferences to my guest profile for future visits.
              </label>
            </div>
            {error && (
              <p role="alert" className="text-sm text-red-600">
                {error}
              </p>
            )}
            {success && (
              <p role="status" className="text-sm text-green-700">
                {success}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full cursor-pointer border-2 border-fourth bg-second font-cinzel text-sm transition-all duration-300 hover:bg-fourth hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
            >
              {loading ? "Submitting..." : "Confirm My Reservation"}
            </button>
          </form>
        </div>
      </section>

      <aside
        aria-live="polite"
        className="hidden w-72 shrink-0 flex-col justify-center bg-second/70 px-5 py-10 lg:flex xl:w-80"
      >
        <div className="border-b border-fourth/30 pb-5">
          <p className="font-cinzel text-xs tracking-[0.2em] text-third">
            LE-MONTE
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold italic text-fourth">
            Your Reservation
          </h2>
          <p className="mt-2 font-serif text-sm text-fourth/70">
            A preview of your evening with us.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-5">
          <div>
            <p className="font-cinzel text-xs tracking-widest text-third">
              DATE
            </p>
            <p className="mt-1 break-words font-serif text-base text-fourth">
              {formattedDate}
            </p>
          </div>
          <div>
            <p className="font-cinzel text-xs tracking-widest text-third">
              TIME
            </p>
            <p className="mt-1 font-serif text-base text-fourth">
              {time || "Not selected"}
            </p>
          </div>
          <div>
            <p className="font-cinzel text-xs tracking-widest text-third">
              GUESTS
            </p>
            <p className="mt-1 font-serif text-base text-fourth">
              {guest} {guest === 1 ? "Guest" : "Guests"}
            </p>
          </div>
          <hr className="border-fourth/20" />
          <div>
            <p className="font-cinzel text-xs tracking-widest text-third">
              GUEST DETAILS
            </p>
            <p className="mt-2 break-words font-serif text-base text-fourth">
              {firstname || lastname
                ? `${firstname} ${lastname}`.trim()
                : "Your name"}
            </p>
            <p className="mt-2 break-all font-serif text-sm text-fourth/70">
              {email || "Email address"}
            </p>
            <p className="mt-1 break-words font-serif text-sm text-fourth/70">
              {phone || "Mobile number"}
            </p>
          </div>
          <hr className="border-fourth/20" />
          <div>
            <p className="font-cinzel text-xs tracking-widest text-third">
              ADDITIONAL DETAILS
            </p>
            <p className="mt-2 font-serif text-sm text-fourth">
              Terms accepted: {terms_agreements ? "Yes" : "Not yet"}
            </p>
            <p className="mt-1 font-serif text-sm text-fourth">
              Save preferences: {preferences ? "Yes" : "No"}
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-fourth/30 pt-5">
          <p className="font-script text-3xl text-third">
            Buon Appetito!
          </p>

          <p className="mt-2 font-serif text-xs leading-relaxed text-fourth/70">
            We look forward to welcoming you and making your visit memorable.
          </p>
        </div>

      </aside>

    </main>
  );
}

