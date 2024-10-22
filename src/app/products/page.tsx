import { GET_PRODUCTS } from "../../lib/queries";
import client from "../../lib/apollo-client";
import Image from "next/image";
import { NodeTypeProps } from "@/lib/types";
import Link from "next/link";
import { extractAndDisplayText } from "../utils";

const ProductsPage = async () => {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  const products = data.products.edges.map(
    ({ node }: { node: NodeTypeProps }) => node
  );

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {products.map((node: NodeTypeProps) => (
          <div
            key={node.id}
            className="border p-4 rounded shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <Link href={`/products/${node.id}`}>
              <Image
                width={350}
                height={350}
                src={node.thumbnail.url}
                alt={node.name}
                className="mb-2"
              />
              <div>
                <p className="text-gray-600 font-bold text-lg capitalize">
                  {node.name}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4 text-gray-500 hover:text-gray-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-gray-500">
                {extractAndDisplayText(node.description)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
