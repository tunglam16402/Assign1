// thay đổi lưu trữ data ở mongodb
// cached 5 phut
// sau 5 phut page se duoc lam lai
// fetch product detail data
// truowngf hợp data được thay đổi ở db
// F5 the page
// -- trường hợp thay đổi chưa quá 5 phút mà reload page thì vẫn hiển thị data cũ (data được lấy từ cache)
// -- trường hợp that đổi quá 5 phút thì page sẽ được hiển thị data mới
// ISG

// app/products/[slug]/page.tsx
// import ProductDetail from "@/components/products/ProductDetail";
// import { getProductDetails } from "@/lib/api/product";
// import { generateProductMetadata } from "@/lib/metadata";
// import { notFound } from "next/navigation";
// import { Metadata } from "next";

// export const revalidate = 300;

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   try {
//     const product = await getProductDetails(params.slug);
//     if (!product) return {};
//     return generateProductMetadata(product);
//   } catch (error) {
//     console.error("Error generating metadata:", error);
//     return {};
//   }
// }

// export default async function Page({ params }: PageProps) {
//   try {
//     const product = await getProductDetails(params.slug);
//     if (!product) return notFound();
//     return <ProductDetail product={product} />;
//   } catch (error) {
//     console.error("Error loading product:", error);
//     return notFound();
//   }
// }

// app/products/[slug]/page.tsx
import ProductDetail from "@/components/products/ProductDetail";
import { getProductDetails } from "@/lib/api/product";
import { notFound } from "next/navigation";

export const revalidate = 300;

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  try {
    const resolvedParams = await params;
    const product = await getProductDetails(resolvedParams.slug);
    if (!product) return notFound();
    return <ProductDetail product={product} />;
  } catch (error) {
    console.error("Error loading product:", error);
    return notFound();
  }
}
