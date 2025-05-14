import { NextResponse } from "next/server";
import Product from "@/models/Product";

export async function GET() {
  try {
    const products = await Product.find();
    console.log("data:", products);
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

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const product = await Product.create(data);
    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    console.error("POST /api/products error:", err);
    return NextResponse.json(
      { message: "Invalid input or server error" },
      { status: 400 }
    );
  }
}
