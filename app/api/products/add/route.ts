import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    //validate data
    // if(error)
    // return NextResponse.json(
    //   { message: "input invalid" },
    //   { status: 400 }
    // );
    const product = await Product.create(data);
    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    console.error("POST /api/products error:", err);
    return NextResponse.json(
      { message: "internal server error" },
      { status: 500 }
    );
  }
}


