import { MenuItemType } from "../data/menuData";

type MenuItemProps = {
  item: MenuItemType;
  onClick: (item: MenuItemType) => void;
};

export default function MenuItem({ item, onClick }: MenuItemProps) {
  return (
    <button
      onClick={() => onClick(item)}
      className="group w-full text-left overflow-hidden rounded-xl
      border border-white/10 bg-white/5 transition duration-300
      hover:-translate-y-1 hover:bg-white/10 hover:border-amber-600/50
      focus-visible:outline-none focus-visible:ring-2
      focus-visible:ring-amber-500"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500
          group-hover:scale-105"
        />

        {item.featured && (
          <span className="absolute top-3 left-3 rounded-full
          bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
            Chef's Choice
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-cinzel text-xl text-white">
            {item.name}
          </h3>

          <span className="shrink-0 font-serif text-lg text-amber-400">
            ${item.price.toLocaleString("en-JM")}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-300 line-clamp-2">
          {item.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs tracking-widest uppercase text-amber-500">
            Explore Dish
          </span>

          <span className="text-amber-500 transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </button>
  );
}