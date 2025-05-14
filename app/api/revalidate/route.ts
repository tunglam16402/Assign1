import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const slug = body.slug;

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }

  revalidateTag(`product-${slug}`);

  return NextResponse.json({ revalidated: true, slug });
}
