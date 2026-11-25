export type MenuItemType = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
  featured?: boolean;
};

export const menuItems: MenuItemType[] = [
  {
    id: 1,
    name: "Arancini",
    category: "Appetizers",
    description:
      "Italian rice balls stuffed with delicious fillings, coated with breadcrumbs and fried until golden.",
    price: 1200,
    image: "/images/arancini.png",
    ingredients: ["Arborio rice", "Mozzarella", "Breadcrumbs", "Fresh herbs"],
    featured: true,
  },
  {
    id: 2,
    name: "Caprese Antipasto Skewers",
    category: "Appetizers",
    description:
      "Fresh basil, juicy tomatoes, and mini mozzarella balls drizzled with balsamic glaze.",
    price: 2000,
    image: "/images/antipasto.png",
    ingredients: ["Fresh basil", "Tomatoes", "Mozzarella", "Balsamic glaze"],
  },
  {
    id: 3,
    name: "Ricotta Meatballs",
    category: "Appetizers",
    description:
      "Tender homemade ricotta meatballs infused with fresh herbs and Parmesan in a rich tomato sauce.",
    price: 2000,
    image: "/images/meatballs.png",
    ingredients: ["Ricotta", "Ground meat", "Parmesan", "Tomato sauce"],
  },
  {
    id: 4,
    name: "Bolognese Pasta",
    category: "Main Dishes",
    description:
      "Traditional Italian pasta tossed in a rich, slow-simmered beef and tomato ragù.",
    price: 3200,
    image: "/images/pasta-bolognese.png",
    ingredients: ["Pasta", "Ground beef", "Tomatoes", "Parmesan"],
    featured: true,
  },
  {
    id: 5,
    name: "Classic Italian Pizza",
    category: "Main Dishes",
    description:
      "Hand-stretched thin-crust pizza topped with tomato sauce, mozzarella, and fresh basil.",
    price: 3400,
    image: "/images/pizza.png",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil"],
  },
  {
    id: 6,
    name: "Grandma's Lasagna",
    category: "Main Dishes",
    description:
      "Layers of tender pasta, homemade meat sauce, creamy béchamel, and melted mozzarella.",
    price: 3000,
    image: "/images/lasagne.png",
    ingredients: ["Lasagna sheets", "Meat sauce", "Béchamel", "Mozzarella"],
  },
  {
    id: 7,
    name: "Panna Cotta",
    category: "Desserts",
    description:
      "A silky Italian cream dessert delicately infused with vanilla and served with berry coulis.",
    price: 2200,
    image: "/images/panna-cotta.png",
    ingredients: ["Cream", "Vanilla", "Sugar", "Berry coulis"],
  },
  {
    id: 8,
    name: "Tiramisu",
    category: "Desserts",
    description:
      "Espresso-soaked ladyfingers layered with rich mascarpone cream and fine cocoa powder.",
    price: 2500,
    image: "/images/tiramisu.png",
    ingredients: ["Ladyfingers", "Mascarpone", "Espresso", "Cocoa"],
    featured: true,
  },
  {
    id: 9,
    name: "Gelato",
    category: "Desserts",
    description:
      "Authentic Italian-style frozen dessert made with fresh ingredients and available in several flavours.",
    price: 2000,
    image: "/images/gelato.png",
    ingredients: ["Milk", "Cream", "Sugar", "Selected flavour"],
  },
  {
    id: 10,
    name: "Soda",
    category: "Drinks",
    description:
      "A refreshing selection of chilled, fizzy soft drinks in classic flavours.",
    price: 300,
    image: "/images/soda.png",
    ingredients: ["Carbonated water", "Selected flavour"],
  },
  {
    id: 11,
    name: "Fruit Cocktails",
    category: "Drinks",
    description:
      "A vibrant blend of fresh tropical fruits bursting with natural sweetness.",
    price: 1500,
    image: "/images/fruit-cocktail.png",
    ingredients: ["Fresh pineapple", "Orange", "Strawberry", "Seasonal fruits"],
  },
  {
    id: 12,
    name: "Wine",
    category: "Drinks",
    description:
      "A carefully curated selection of fine Italian wines, featuring rich reds, crisp whites, and delicate rosés, chosen to complement our authentic dishes and celebrate Italy's renowned winemaking tradition.",
    price: 3000,
    image: "/images/wine.png",
    ingredients: ["Red wine", "White wine", "Fresh grapes", "Seasonal berries"],
  },
];

export const categories = [
  "All",
  "Appetizers",
  "Main Dishes",
  "Desserts",
  "Drinks",
];