export default function MenuHero() {
  return (
    <section className="relative flex h-[45vh] min-h-[300px]
    max-h-[550px] items-end justify-center overflow-hidden">

      {/* Background image */}
      <img
        src="/images/italian-background.jpg"
        alt="Italian restaurant atmosphere"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 pb-12 text-center">

        <p className="mb-3 text-xs tracking-[0.5em] uppercase
        text-amber-400">
          Le-Monte Restaurant
        </p>

        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl">
          Our Menu
        </h1>

        <div className="mt-4 text-2xl text-amber-400">
          ──── ୨୧ ────
        </div>

        <p className="mt-3 font-serif text-sm tracking-widest
        text-gray-200">
          A JOURNEY THROUGH ITALIAN CUISINE
        </p>

      </div>

    </section>
  );
}