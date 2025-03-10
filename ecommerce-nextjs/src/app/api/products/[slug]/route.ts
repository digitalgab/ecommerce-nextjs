import { z } from 'zod'

import data from '../data.json'

export async function GET(
  _: Request,
  { params }: { params: Promise<{ slug: string }> },
) {

  const { slug } = await params;
  const slugProduct = z.string().parse(slug)

  const product = data.products.find((product) => product.slug === slugProduct)

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}