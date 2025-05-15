import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Button from "../ui/Button";

type ProductProps = {
  product: {
    _id: string;
    title: string;
    description?: string;
    price: number;
    compareAtPrice?: number;
    thumbnail: string;
  };
};

export default function ProductDetail({ product }: ProductProps) {
  console.log("producct data", product);
  // const { id, price } = product;
  return (
    <main className="w-main mx-auto p-6">
      <Breadcrumb current={product.title} />

      <div className="flex mt-6 flex-col lg:flex-row gap-8">
        <div className="relative w-full lg:w-1/2 border border-gray-100 h-[600px]">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain "
          />
        </div>
        <div className="flex-1 space-y-6 ml-6">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex items-baseline gap-4">
            <span className="text-2xl font-semibold">${product.price}</span>
            {product.compareAtPrice && (
              <span className="text-lg line-through text-gray-500">
                ${product.compareAtPrice}
              </span>
            )}
          </div>
          <Button variant="secondary">ADD TO CART</Button>
        </div>
      </div>
    </main>
  );
}
