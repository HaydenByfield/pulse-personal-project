import { ReactNode } from "react";

type MenuCategoryProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function MenuCategory({
  title,
  description,
  children,
}: MenuCategoryProps) {
  return (
    <section id={title.toLowerCase().replaceAll(" ", "-")} className="scroll-mt-28">

      <div className="mb-8">
        <h2 className="font-cinzel text-3xl md:text-4xl text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm md:text-base text-gray-400 font-serif">
            {description}
          </p>
        )}

        <div className="mt-4 h-px w-20 bg-amber-500" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {children}
      </div>

    </section>
  );
}