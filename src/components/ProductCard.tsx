import type { Product } from "@/types/product";
import Link from "next/link";
type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border border-gray-300 p-4">
      <h2 className="text-xl font-bold">{product.name}</h2>
       <img className="w-full h-auto object-cover" src={product.image} alt={product.name} />
      <p className="text-lg text-green-500">
        ₹{product.price.toLocaleString()}
      </p>

      <p className="text-lg text-green-500">
        {product.category}
      </p>

      <Link href={`/products/${product.id}`}>
  View Details
</Link>
    </div>
  );
}