"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { useCart, useCartUI } from "@/hook/cart/useCart";

type ProductType = {
  _id: string;
  title: string;
  description?: string;
  price: number;
  compareAtPrice: number;
  thumbnail: string;
  slug: string;
};

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const { openCart } = useCartUI();

  const handleAddToCart = () => {
    addItem({
      id: product._id,
      title: product.title,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      thumbnail: product.thumbnail,
      quantity: 1,
    });
    openCart();
  };
  return (
    <div className="group border border-gray-100 rounded-lg overflow-hidden transform transition hover:scale-102">
      <Link href={`/products/${product.slug}`}>
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
              <span className="text-sm line-through text-main-color">
                ${product.compareAtPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
      <Button variant="primary" onClick={handleAddToCart}>
        ADD TO CART
      </Button>
    </div>
  );
}
