// import type { Product } from "@/types/product";
// import Link from "next/link";
// type ProductCardProps = {
//   product: Product;
// };

// export default function ProductCard({ product }: ProductCardProps) {
//   return (
//     <div className="border border-gray-300 p-4">
//       <h2 className="text-xl font-bold">{product.name}</h2>
//        <img className="w-full h-auto object-cover" src={product.image} alt={product.name} />
//       <p className="text-lg text-green-500">
//         ₹{product.price.toLocaleString()}
//       </p>

//       <p className="text-lg text-green-500">
//         {product.category}
//       </p>

//       <Link href={`/products/${product.id}`}>
//   View Details
// </Link>
//     </div>
//   );
// }
import type { Product } from "@/types/product";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="aspect-[4/5] overflow-hidden bg-stone-100">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Product Information */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-wide text-stone-800">
            {product.name}
          </h2>

          <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium capitalize text-stone-600">
            {product.category}
          </span>
        </div>

        {/* Price */}
        <p className="mt-3 text-lg font-medium text-stone-800">
          ₹{product.price.toLocaleString()}
        </p>

        {/* View Details */}
        <Link
          href={`/products/${product.id}`}
          className="mt-5 block w-full rounded-xl border border-stone-800 px-5 py-3 text-center text-sm font-medium tracking-wide text-stone-800 transition-all duration-300 hover:bg-stone-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
