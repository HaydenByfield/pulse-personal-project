"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black text-white">

      {/* Background image */}
      <img
        src="/images/italian-background3.jpg"
        alt="Italian dining atmosphere"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/80" />

      {/* Main content */}
      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8">

        {/* Main heading */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-cinzel text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Love means<br />putting you first
          </h1>

          <p className="font-serif text-yellow-400 text-base sm:text-lg md:text-xl lg:text-2xl">
            Amare significa metterti al primo posto
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-8 max-w-3xl space-y-4">
          <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Taste a piece of culture. Have a look at our signature dishes.
          </p>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
            Experience the passion, tradition, and authentic flavours of Italy.
            From timeless recipes to carefully crafted dishes, every visit is
            an invitation to discover something special.
          </p>
        </div>

        {/* Main actions */}
        <div className="mt-9 flex w-full max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => router.push("/reservation")}
            className="h-12 w-full cursor-pointer bg-third px-8 font-serif text-base transition hover:opacity-80 active:opacity-60 sm:w-auto sm:text-lg"
          >
            Reserve a Table
          </button>

          <button
            onClick={() => router.push("/menu")}
            className="h-12 w-full cursor-pointer border border-white/80 px-8 font-serif text-base transition hover:bg-white hover:text-black active:opacity-70 sm:w-auto sm:text-lg"
          >
            Explore the Menu
          </button>
        </div>

        {/* Journey and story */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="font-cinzel text-lg tracking-widest sm:text-xl">
            Follow Our Journey
          </p>

          <button
            onClick={() => router.push("/#story")}
            className="cursor-pointer border-b border-red-400 pb-1 font-serif text-base text-red-400 transition hover:text-white sm:text-lg"
          >
            Our Story
          </button>
        </div>

        {/* Integrated restaurant details */}
        <div className="mt-16 flex w-full max-w-4xl flex-col items-center gap-3 border-t border-white/25 pt-6 sm:mt-20 sm:flex-row sm:justify-between sm:gap-6">

          <div className="text-center sm:text-left">
            <p className="font-cinzel text-sm tracking-[0.2em] sm:text-base">
              ESTABLISHED 1964
            </p>
            <p className="mt-1 text-xs text-white/70 sm:text-sm">
              A Taste of Tradition
            </p>
          </div>

          <div className="hidden h-10 w-px bg-white/30 sm:block" />

          <p className="font-serif text-sm italic text-white/80 sm:text-base">
            A Touch of Elegance
          </p>

          <div className="hidden h-10 w-px bg-white/30 sm:block" />

          <p className="font-cinzel text-xs tracking-widest text-white/80 sm:text-sm">
            AUTHENTIC ITALIAN DINING
          </p>

        </div>
      </section>
    </main>
  );
}
