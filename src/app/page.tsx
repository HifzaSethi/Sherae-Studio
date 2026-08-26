import type { Product } from "@/types/product";
const products: Product[] = [
  {
    name: "Zamurd",
    price: 2500,
    id: 1,
    category: "kids",
  },
  {
    name: "Rimjhim",
    price: 2200,
    id: 2,
    category: "kids",
  },
  {
    name: "Mahtab",
    price: 3000,
    id: 3,
    category: "kids",
  },
];

import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-center">
        SHERAÉ STUDIO
      </h1>

      <p className="text-center">
        Where every piece tells a story.
      </p>

      <p className="text-blue-500 hover:underline cursor-pointer">
        [ Explore Collection ]
      </p>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
}