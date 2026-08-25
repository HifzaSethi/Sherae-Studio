const products = [
  {
    name: "Zamurd",
    price: 2500,
  },
  {
    name: "Rimjhim",
    price: 2200,
  },
  {
    name: "Mahtab",
    price: 3000,
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

      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}