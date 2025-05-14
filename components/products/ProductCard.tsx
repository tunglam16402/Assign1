import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

type ProductType = {
  _id: string;
  title: string;
  description?: string;
  price: number;
  compareAtPrice?: number;
  thumbnail: string;
};

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  console.log("product.thumbnail:", product.thumbnail);
  console.log("product.title:", product.title);
  return (
    <div className="group border border-gray-100 rounded-lg overflow-hidden transform transition hover:scale-102">
      <Link href={`/products/${product._id}`}>
        <div className="relative w-full h-90">
          <Image
            src={product.thumbnail || "/placeholder_image.svg"}
            alt={product.title || "Product image"}
            fill
            className="object-contain"
          />
        </div>
        <div className="p-4">
          <h2 className="font-medium text-lg mb-2 line-clamp-3">
            {product.title}
          </h2>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-semibold">${product.price}</span>
            {product.compareAtPrice != null && (
              <span className="text-sm line-through text-gray-500">
                ${product.compareAtPrice}
              </span>
            )}
          </div>
          <Button variant="primary">ADD TO CART</Button>
        </div>
      </Link>
    </div>
  );
}
