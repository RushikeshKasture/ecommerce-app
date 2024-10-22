import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-8 text-center">
      <p className="text-4xl font-bold mb-6 text-gray-700">
        Welcome to My E-Commerce Store
      </p>
      <Link
        href="/products"
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Browse Products
      </Link>
    </div>
  );
}
