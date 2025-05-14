// thay đổi lưu trữ data ở mongodb
// cached 5 phut
// sau 5 phut page se duoc lam lai
// fetch product detail data
// truowngf hợp data được thay đổi ở db
// F5 the page
// -- trường hợp thay đổi chưa quá 5 phút mà reload page thì vẫn hiển thị data cũ (data được lấy từ cache)
// -- trường hợp that đổi quá 5 phút thì page sẽ được hiển thị data mới
// ISG

// app/product/[slug]/page.tsx
// import Product from "@/models/Product";
// import type { IProduct } from "@/models/Product";
// import { Types } from "mongoose";
// import { notFound } from "next/navigation";
// import ProductDetail from "@/components/products/ProductDetail";

// export const revalidate = 300;

// interface ProductDetailPageProps  {
//   params: { slug: string };
// }

// export default async function ProductDetailPage({ params }: ProductDetailPageProps ) {
//   const { slug } = params;
//   const productDoc = await Product.findById(slug).lean<IProduct>().exec();

//   if (!productDoc) return notFound();

//   const product = {
//     id: (productDoc._id as Types.ObjectId).toString(),
//     title: productDoc.title,
//     description: productDoc.description,
//     price: productDoc.price,
//     compareAtPrice: productDoc.compareAtPrice,
//     thumbnail: productDoc.thumbnail,
//   };

//   return <ProductDetail {...product} />;
// }

import Product from "@/models/Product";
import type { IProduct } from "@/models/Product";
import { Types } from "mongoose";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/products/ProductDetail";

export const revalidate = 300;

export default async function ProductDetailPage(props: {
  params: { slug: string };
}) {
  const slug = props.params.slug;
  const productDoc = await Product.findById(slug).lean<IProduct>().exec();

  if (!productDoc) return notFound();

  const product = {
    id: (productDoc._id as Types.ObjectId).toString(),
    title: productDoc.title,
    description: productDoc.description,
    price: productDoc.price,
    compareAtPrice: productDoc.compareAtPrice,
    thumbnail: productDoc.thumbnail,
  };

  return <ProductDetail {...product} />;
}
