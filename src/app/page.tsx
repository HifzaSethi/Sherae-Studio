import Image from "next/image";
const products = [
  {
    name: "Zamurrad",
    price: 2500,
  },
  {
    name: "Rimjhim",
    price: 2200,
  },
];
export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-3xl font-bold text-center">SHERAÉ STUDIO</h1>
    <p className="text-center">Where every piece tells a story.</p>
    <p className="text-blue-500 hover:underline cursor-pointer">[ Explore Collection ]</p>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {products.map((product, index) => (
        <div key={index} className="border border-gray-300 p-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-lg text-green-500">₹{product.price.toLocaleString()}</p>
        </div>
      ))}
    </div>
   </div>

  );
}
