import ProductList from "@/components/products/ProductList";
import { getAllProducts } from "@/lib/api/product";

export const revalidate = 300;

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <div className="w-main mx-auto">
      <h1 className="text-4xl font-semibold mb-8 mt-4">Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}
