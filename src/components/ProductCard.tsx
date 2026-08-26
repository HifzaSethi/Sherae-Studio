import type { Product } from "@/types/product";

type ProductCardProps = {
  name: Product["name"];
  price: Product["price"];
  category: Product["category"];
};

export default function ProductCard({
  name,
  price,
  category,
}: ProductCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 border border-gray-300 p-4">
      <h2 className="text-xl font-bold">{name}</h2>

      <p className="text-lg text-green-500">
        ₹{price.toLocaleString()}
      </p>
       <p className="text-lg text-green-500">
        {category}
      </p>
    </div>
  );
}