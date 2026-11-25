
export default function OurStory() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eee6d6] px-5 py-12 text-[#30271f] sm:px-8 md:py-16">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#b8a17b] blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#a65e42] blur-[120px]" />
      </div>

      {/* Decorative ingredients */}
      <img
        src="/images/basil.png"
        alt=""
        className="pointer-events-none absolute -left-24 top-40 hidden w-64 opacity-40 lg:block"
      />
      <img
        src="/images/tomatoes.png"
        alt=""
        className="pointer-events-none absolute -right-24 top-40 hidden w-64 opacity-40 lg:block"
      />

      <img
        src="/images/tomatoes.png"
        alt=""
        className="pointer-events-none absolute -right-24 bottom-20 hidden w-72 opacity-40 lg:block"
      />

      <img
        src="/images/basil.png"
        alt=""
        className="pointer-events-none absolute -left-24 bottom-20 hidden w-72 opacity-40 lg:block"
      />

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center">

        {/* Introduction */}
        <div className="mb-10 text-center">
          <p className="font-serif text-sm uppercase tracking-[0.3em] text-[#98734f] sm:text-base">
            A Legacy Since 1964
          </p>

          <h1 className="mt-3 font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Our Story
          </h1>

          <div className="mx-auto mt-5 h-px w-20 bg-[#a65e42]" />

          <p className="mx-auto mt-5 max-w-2xl font-serif text-base leading-relaxed text-[#655547] sm:text-lg">
            More than a restaurant, Le-Monte is a celebration of family,
            tradition, and the timeless flavours of Italy.
          </p>
        </div>

        {/* Then and now images */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">

          {/* Historical image */}
          <div className="transition-transform duration-500 hover:scale-108">
            <div className="relative h-64 overflow-hidden border-[8px] border-[#d5c5a9] shadow-lg sm:h-72 md:h-80">
              <img
                src="/images/italian-vintage.jpg"
                alt="Le-Monte's early beginnings"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

              <span className="absolute bottom-4 left-4 bg-[#eee6d6]/90 px-4 py-2 font-cinzel text-xs tracking-widest text-[#30271f] sm:text-sm">
                WHERE WE BEGAN
              </span>
            </div>
          </div>

          {/* Modern image */}
          <div className="transition-transform duration-500 hover:scale-108">
            <div className="relative h-64 overflow-hidden border-[8px] border-[#d5c5a9] shadow-lg sm:h-72 md:h-80">
              <img
                src="/images/italian-dishes.jpg"
                alt="The Le-Monte dining experience today"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

              <span className="absolute bottom-4 left-4 bg-[#eee6d6]/90 px-4 py-2 font-cinzel text-xs tracking-widest text-[#30271f] sm:text-sm">
                WHERE WE ARE TODAY
              </span>
            </div>
          </div>

        </div>

        {/* Story */}
        <article className="mt-12 w-full max-w-4xl text-center sm:mt-16">

          <h2 className="font-cinzel text-xl text-[#76563d] sm:text-2xl md:text-3xl">
            A Tradition Passed Through Generations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-serif text-base leading-8 text-[#514538] sm:text-lg sm:leading-9 hover:text-third">
            Founded in 1964, our Italian restaurant began as a humble family
            dream rooted in a passion for authentic Italian cuisine, warm
            hospitality, and the joy of bringing people together. Inspired by
            generations of traditional recipes passed down through the family,
            we set out to create a place where every meal tells a story and
            every guest feels at home. Over the decades, we have remained committed to preserving the
            rich flavours of Italy, combining time-honoured cooking techniques
            with fresh ingredients and a touch of creativity. Today, our legacy continues, welcoming each generation to
            experience the timeless taste, warmth, and tradition of Italian
            dining.
          </p>

          {/* Closing detail */}
          <div className="mt-10">
            <p className="font-cinzel text-sm tracking-[0.25em] text-[#98734f] sm:text-base">
              LE-MONTE
            </p>
            <p className="mt-2 font-serif text-sm italic text-[#76563d] sm:text-base">
              A Taste of Tradition. A Touch of Elegance.
            </p>
          </div>

        </article>
      </section>
    </main>
  );
}
