import { getProductDetail } from "@/services/category.service";
import ProductDetailClient from "./ProductDetailView";
import { notFound } from "next/navigation";
import ProductDetailView from "./ProductDetailView";

interface PageProps {
  params: Promise< {
    productId: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { productId } = await params;

  const res = await getProductDetail(productId);

  if (!res || res.status !== "success" || !res.data?.length) {
    return notFound();
  }

  const product = res.data[0];

  return <ProductDetailView product={product} />;
}