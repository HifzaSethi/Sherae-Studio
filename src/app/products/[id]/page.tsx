import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const productId = Number(id);

  const product = products.find(
    (product) => product.id === productId
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">

        {/* Product Image */}
        <div className="overflow-hidden rounded-2xl bg-stone-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-[650px] w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
            {product.category}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            {product.name}
          </h1>

          <p className="mt-6 text-2xl font-medium text-stone-800">
            ₹{product.price.toLocaleString()}
          </p>

          <div className="my-8 h-px w-full bg-stone-200" />

          <p className="text-base leading-7 text-stone-600">
            Discover the elegance of {product.name}, thoughtfully designed
            with comfort, quality, and timeless style in mind.
          </p>

          {/* Product Details */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <span className="text-sm text-stone-500">
                Category
              </span>

              <span className="font-medium capitalize text-stone-900">
                {product.category}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <span className="text-sm text-stone-500">
                Product ID
              </span>

              <span className="font-medium text-stone-900">
                #{product.id}
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            className="mt-10 w-full rounded-full bg-stone-900 px-6 py-4 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-stone-700"
          >
            Order Now
          </button>

        </div>
      </div>
    </main>
  );
}
