import link from "next/link"

export default function Footer() {

  return (
    <footer className="w-full bg-third px-5 py-6 text-white sm:px-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 sm:flex-row sm:justify-between">

        {/* Brand */}
        <div className="text-center sm:text-left">
          <h2 className="font-script text-3xl sm:text-4xl">
            Le-Monte
          </h2>
          <p className="font-serif text-xs tracking-wider text-white/70">
            A Taste of Tradition. A Touch of Elegance.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-cinzel text-xs sm:text-sm">
          <a href="/" className="transition-colors hover:text-fifth">
            Home
          </a>
          <a href="/menu" className="transition-colors hover:text-fifth">
            Menu
          </a>
          <a href="/reservation" className="transition-colors hover:text-fifth">
            Reservations
          </a>
        </nav>

        {/* Social links */}
        <div className="flex items-center gap-4 font-serif text-sm">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-fifth"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="transition-colors hover:text-fifth"
          >
            Facebook
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-5 max-w-7xl border-t border-white/20 pt-4 text-center">
        <p className="font-serif text-xs text-white/65 sm:text-sm">
          © 2026 Le-Monte Italian Restaurant. All rights reserved.
        </p>
      </div>

    </footer>
  );
}