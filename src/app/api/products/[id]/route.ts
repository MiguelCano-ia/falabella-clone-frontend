import { products } from "@/lib/utils";

export async function GET(req, { params }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return new Response("Not Found", { status: 404 });

  return new Response(JSON.stringify(product), { status: 200 });
}
