import { NextResponse } from "next/server";
import Product from "@/models/Product";

export async function GET() {
  try {
    const products = await Product.find();
    console.log("Products fetched:", products.length);
    return NextResponse.json(products);
  } catch (err) {
    console.error("GET /api/products error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
