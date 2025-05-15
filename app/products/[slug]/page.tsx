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
import { notFound } from "next/navigation";

export const revalidate = 300;

interface Props {
  params: { slug: string };
}

const getProductDetails = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function Page({ params }: Props) {
  const { slug } = params;
  const product = await getProductDetails(slug);
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
