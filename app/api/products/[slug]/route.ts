import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/Product";

export async function GET(req: NextRequest) {
  try {
    const slug = req.nextUrl.pathname.split("/").pop();

    const product = await Product.findOne({ slug });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (err) {
    console.error("GET /api/products/[slug] error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
