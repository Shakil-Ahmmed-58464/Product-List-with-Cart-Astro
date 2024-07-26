type Product = {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
};

export default const products: Product[] = [
  {
    id: 1,
    category: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
    image: "image-waffle-desktop.jpg",
  },
  {
    id: 2,
    category: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: "image-creme-brulee-desktop.jpg",
  },
  {
    id: 3,
    category: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
    image: "image-macaron-desktop.jpg",
  },
  {
    id: 4,
    category: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    image: "image-tiramisu-desktop.jpg",
  },
  {
    id: 5,
    category: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    image: "image-baklava-desktop.jpg",
  },
  {
    id: 6,
    category: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: "image-meringue-desktop.jpg",
  },
  {
    id: 7,
    category: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    image: "image-cake-desktop.jpg",
  },
  {
    id: 8,
    category: "Brownie",
    name: "Salted Caramel Brownie",
    price: 5.5,
    image: "image-brownie-desktop.jpg",
  },
  {
    id: 9,
    category: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: "image-panna-cotta-desktop.jpg",
  },
];
