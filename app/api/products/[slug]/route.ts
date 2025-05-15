// import Product from "@/models/Product";
// import { NextResponse } from "next/server";

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   try {
//     const { slug } = params;
//     const product = await Product.findOne({ slug });
//     if (!product) {
//       return NextResponse.json(
//         { message: "Product not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(product);
//   } catch (err) {
//     console.error("GET /api/products/[slug] error:", err);
//     return NextResponse.json({ message: "Server error" }, { status: 500 });
//   }
// }

import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const product = await Product.findOne({ slug });
    console.log(product);

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
