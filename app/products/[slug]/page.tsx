// thay đổi lưu trữ data ở mongodb
// cached 5 phut
// sau 5 phut page se duoc lam lai
// fetch product detail data
// truowngf hợp data được thay đổi ở db
// F5 the page
// -- trường hợp thay đổi chưa quá 5 phút mà reload page thì vẫn hiển thị data cũ (data được lấy từ cache)
// -- trường hợp that đổi quá 5 phút thì page sẽ được hiển thị data mới
// ISG

import ProductDetail from "@/components/products/ProductDetail";
import { getProductDetails } from "@/lib/api/product";
import { generateProductMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export const revalidate = 300;

interface Props {
  params: { slug: string };
}

export async function generateMetaData({ params }: Props) {
  const product = await getProductDetails(params.slug);
  if (!product) return {};

  return generateProductMetadata(product);
}

export default async function Page({ params }: Props) {
  const product = await getProductDetails(params.slug);
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
