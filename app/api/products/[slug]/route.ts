import { NextResponse } from "next/server";
import data from "@/data/products.json";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const product = data.find((item) => item.id === params.slug);
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
