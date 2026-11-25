"use client";

import { MenuItemType } from "../data/menuData";

type MenuDetailsProps = {
  item: MenuItemType | null;
  onClose: () => void;
};

export default function MenuDetails({
  item,
  onClose,
}: MenuDetailsProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
      bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
        rounded-2xl bg-[#24201c] text-white shadow-2xl
        border border-amber-600/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dish details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10
          items-center justify-center rounded-full bg-black/60
          text-xl hover:bg-amber-600 transition"
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image */}
          <div className="h-64 md:h-full min-h-72">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center p-6 md:p-10">

            <span className="text-xs tracking-[0.3em] uppercase text-amber-500">
              {item.category}
            </span>

            <h2 className="mt-3 font-cinzel text-3xl md:text-4xl">
              {item.name}
            </h2>

            <p className="mt-5 text-gray-300 leading-7 font-serif">
              {item.description}
            </p>

            <div className="mt-7">
              <h3 className="font-cinzel text-lg text-amber-400">
                Ingredients
              </h3>

              <ul className="mt-3 flex flex-wrap gap-2">
                {item.ingredients.map((ingredient) => (
                  <li
                    key={ingredient}
                    className="rounded-full border border-white/10
                    bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6
            flex items-center justify-between">
              <span className="text-gray-400 font-serif">
                Price
              </span>

              <span className="text-2xl font-serif text-amber-400">
                ${item.price.toLocaleString("en-JM")}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}