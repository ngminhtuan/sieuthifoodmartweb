import { fetchAPI } from "./fetcher";

const categories = [
  { name: 'Tất cả sản phẩm', icon: '🛒', count: '30k+ sản phẩm', slug: 'tat-ca-san-pham' },
  { name: 'Thực phẩm tươi sống', icon: '🥩', count: '20+ loại sản phẩm', slug: 'thuc-pham-tuoi-song' },
  { name: 'Thực phẩm công nghệ', icon: '🥫', count: '25+ loại sản phẩm', slug: 'thuc-pham-cong-nghe' },
  { name: 'Trái cây và rau củ', icon: '🍎🥬', count: '50+ loại sản phẩm', slug: 'trai-cay-rau-qua' },
  { name: 'Các loại đồ uống', icon: '☕', count: '30+ loại sản phẩm', sslug: 'do-uong' },
  { name: 'Đồ gia dụng', icon: '🍳', count: '40 loại sản phẩm', slug: 'do-gia-dung' },
  { name: 'Đồ chơi trẻ em', icon: '🧩', count: '25 loại sản phẩm', slug: 'do-choi-tre-em' },
  { name: 'Nhãn hàng riêng', icon: '🏷️', count: '45 loại sản phẩm', slug: 'cac-nhan-hang-rieng' }
];

export async function getCategories() {
  return fetchAPI("/GetProductCategories");
}

export async function getProductsByCategory(category: string | number | null | undefined, pageNumber: string | number) {
  return fetchAPI(`searchValue=&categoryId=${category}&pageNumber=${pageNumber}&pageSize=15`);
}

export async function getProductDetail(slug: string) {
  return fetchAPI(`/GetProductDetails?productId=${slug}`);
}