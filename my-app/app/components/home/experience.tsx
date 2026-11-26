
"use client"

import { useRouter } from "next/navigation"

export default function theExperience() {
  const router = useRouter()

  return (
    <main className="relative z-0 min-h-screen overflow-x-clip bg-fifth">
      <img
        src="/images/italian-background1.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-0"
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12 sm:px-8 md:px-12 lg:px-16">
        <h1 className="text-center font-script text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          The Le-Monte Experience
        </h1>
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:gap-10 lg:gap-14">
          <div className="w-full max-w-sm flex-none sm:max-w-md md:w-1/2 md:max-w-none">
            <img
              src="/images/italian-vintage2.jpg"
              alt="Gustavo, Chef and Co-Founder"
              className="h-64 w-full object-cover sm:h-80 md:h-96 lg:h-[440px] xl:h-[550px]"
            />
            <p className="mt-3 text-center font-serif text-base sm:text-lg md:text-left lg:text-xl">
              Gustavo - Chef, Co-Founder
            </p>

          </div>

          <div className="flex w-full max-w-2xl flex-col gap-4 md:w-1/2">
            <p className="font-serif text-lg text-yellow-600 sm:text-xl">
              From Gustavo
            </p>
            <h3 className="font-cinzel text-xl italic text-third sm:text-2xl lg:text-3xl xl:text-4xl">
              "Buon Appetito,
              <br />
              Indulge in Elegance"
            </h3>
            <p className="text-justify font-serif text-sm leading-relaxed tracking-tight text-black sm:text-base md:text-lg lg:text-xl">
              Step into a world where Italian tradition, exceptional cuisine
              and warm hospitality come together. At Le-Monte, dining is more
              than simply enjoying a meal; it is about embracing the flavours,
              culture and traditions that make Italian cuisine so special.
              Inspired by generations of culinary heritage since 1964, we
              strive to create an atmosphere where every guest feels welcome
              and every meal becomes a memorable occasion.
            </p>
            <button
              onClick={() => router.push("/reservation")}
              className="mt-3 h-11 w-full max-w-xs cursor-pointer bg-fourth font-serif text-sm text-white transition-opacity duration-300 hover:opacity-80 sm:text-base md:text-lg"
            >
              Make Reservations
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
