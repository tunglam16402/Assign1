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
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    slug: string;
  };
};

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const product = await Product.findOne({ slug: params.slug });

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
