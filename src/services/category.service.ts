import { fetchAPI } from "./fetcher";

export async function getCategories() {
  return fetchAPI("/GetProductCategories");
}

export async function getProductsByCategory(category: string | number | null | undefined, pageNumber: string | number) {
  return fetchAPI(`/SearchProduct?categoryId=${category}&pageSize=15&pageNumber=${pageNumber}`);
}

export async function getProductDetail(productId: string) {
  return fetchAPI(`/get-product-detail?productId=${productId}`);
}

export async function getProductsFeature(productNo: any) {
  return fetchAPI(`/GetProductsFeature?productNo=${productNo}`)
}

export async function getProductsRelated(category: any) {
  return fetchAPI(`/GetProductsRelated?categoryId=${category}&productNo=4`)
}

