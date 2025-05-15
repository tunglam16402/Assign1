import ProductCard from "./ProductCard";

type Product = {
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
  description?: string;
  compareAtPrice?: number;
  slug: string;
};

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={{
            _id: product._id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            description: product.description,
            compareAtPrice: product.compareAtPrice,
            slug: product.slug,
          }}
        />
      ))}
    </div>
  );
}
