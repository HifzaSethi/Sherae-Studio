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
    <div className="min-h-screen bg-stone-50 px-6 py-16">
     <h1 className="text-center text-5xl font-semibold tracking-widest">
  SHERAÉ STUDIO
</h1>

<p className="mt-4 text-center text-lg text-stone-600">
  Where every piece tells a story.
</p>

<p className="mt-6 text-center underline cursor-pointer">
  Explore Collection
</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
    </div>
  );
}