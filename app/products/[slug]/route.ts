import { NextResponse } from 'next/server';
import Product from '@/models/Product';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const product = await Product.findById(params.slug).lean();
    if (!product) return NextResponse.json({ message: 'Not Found' }, { status: 404 });

    return NextResponse.json(product);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching product' }, { status: 500 });
  }
}
