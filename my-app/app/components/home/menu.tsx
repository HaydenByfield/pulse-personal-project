export default function Menu() {
  const chefChoices = [
    {
      number: "01",
      category: "APPETIZERS",
      name: "Arancini",
      description:
        "Italian rice balls stuffed with delicious fillings, coated with breadcrumbs and fried until golden.",
      image: "/images/italian-arancini.jpg",
    },
    {
      number: "02",
      category: "MAIN COURSE",
      name: "Bolognese Pasta",
      description:
        "Traditional Italian pasta tossed in a rich, slow-simmered beef and tomato ragù.",
      image: "/images/italian-bolognese.jpg",
    },
    {
      number: "03",
      category: "DESSERT",
      name: "Tiramisu",
      description:
        "Espresso-soaked ladyfingers layered with rich mascarpone cream and fine cocoa powder.",
      image: "/images/italian-tiramisu.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-clip bg-second px-4 py-12 sm:px-8 md:px-12 lg:px-16">

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-third/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-fourth/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <header className="mb-10 text-center sm:mb-14">
          <p className="mb-5 font-cinzel text-xs tracking-[0.3em] text-fourth sm:text-sm">
            A TASTE OF TRADITION
          </p>

          <h1 className="mr-5 font-script text-6xl text-third sm:text-7xl md:text-8xl">
            Menu
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-serif text-sm leading-relaxed text-fourth sm:text-base md:text-lg">
            Every dish tells a story. Discover a selection of carefully
            prepared favourites, inspired by tradition and made to be enjoyed.
          </p>
        </header>

        {/* Section heading */}
        <div className="mb-8 flex flex-col gap-3 border-b border-fourth/20 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 font-cinzel text-xs tracking-[0.2em] text-third">
              HANDPICKED BY OUR CHEF
            </p>

            <h2 className="font-cinzel text-xl italic text-fourth sm:text-2xl md:text-3xl">
              Chef's Selection
            </h2>

            <p className="mt-2 font-serif text-sm text-fourth/75 sm:text-base">
              A little something to start, savour, and finish.
            </p>
          </div>

          <a
            href="/menu"
            className="w-fit font-cinzel text-xs text-fourth underline underline-offset-4 transition-colors duration-300 hover:text-third sm:text-sm"
          >
            View Entire Menu →
          </a>
        </div>

        {/* Chef's choices */}
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {chefChoices.map((dish) => (
            <article
              key={dish.number}
              className="group flex min-w-0 flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-first/20">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute left-4 top-4 bg-second/90 px-4 py-2">
                  <span className="font-cinzel text-[10px] tracking-[0.2em] text-fourth sm:text-xs">
                    {dish.category}
                  </span>
                </div>
              </div>

              {/* Dish details */}
              <div className="flex flex-col pt-5">
                <div className="flex items-start gap-3">
                  <span className="pt-1 font-serif text-lg text-third/70 sm:text-xl">
                    {dish.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-cinzel text-lg leading-snug text-third sm:text-xl lg:text-2xl">
                      {dish.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 font-serif text-sm leading-7 text-fourth/85 sm:text-base">
                  {dish.description}
                </p>

                <div className="mt-5 h-px w-12 bg-third/50 transition-all duration-500 group-hover:w-24" />
              </div>
            </article>
          ))}
        </section>

        {/* Closing message */}
        <footer className="mt-16 border-t border-fourth/20 py-10 text-center sm:mt-20">
          <p className="font-script text-3xl text-third sm:text-4xl">
            Buon Appetito!
          </p>

          <p className="mt-2 font-serif text-sm text-fourth/75 sm:text-base">
            Good food, wonderful company, and memories worth sharing.
          </p>
        </footer>

      </div>
    </main>
  );
}

