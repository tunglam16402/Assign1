import ProductList from "@/components/products/ProductList";
import { headers } from "next/headers";

export const revalidate = 300;

type ProductFromApi = {
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
  description?: string;
  compareAtPrice?: number;
};

async function fetchProducts(): Promise<ProductFromApi[]> {
  const host = (await headers()).get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main className="w-main mx-auto">
      <h1 className="text-4xl font-semibold mb-8 mt-4">Our Products</h1>
      <ProductList products={products} />
    </main>
  );
}
