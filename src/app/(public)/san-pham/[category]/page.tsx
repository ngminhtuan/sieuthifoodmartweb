import Link from 'next/link';
import { getCategories, getProductsByCategory } from '@/services/category.service';
import SimpleProductCard from '@/components/ProductCard';
import SidebarCategoryUI from '@/app/utils/SidebarCategoryUI';
import { findCategoryBySlug } from '@/app/utils/category.helper';
import { dummyDataListCategory } from '@/app/utils/DumDataListCategory';

import type { Metadata } from "next";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;

  const categoryNameMap: Record<string, string> = {
    "do-choi-tre-em": "Đồ chơi trẻ em",
    "gia-dung": "Gia dụng",
  };

  const name = categoryNameMap[category] ?? "Sản phẩm";

  return {
    title: `${name} | Foodmart`,
    description: `Danh mục ${name} tại Foodmart`,
  };
}

export default async function CategoryProductsPage({ params, searchParams }: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: any}>;
}) {

  const slug = (await params).category;

  const pageNumber = (await searchParams).page

  const category = findCategoryBySlug(dummyDataListCategory, slug);

  const listProductByCategoryId = await getProductsByCategory(category?.id, pageNumber)

  const secondIcon = {"icon": "🛒"}

  //Pagination Logic
  function getPaginationPages(
    currentPage: number,
    totalPages: number
  ) {
    const pages: (number | '...')[] = [];

    const FIRST_PAGES = [1, 2, 3];
    const LAST_PAGES = [totalPages - 2, totalPages - 1, totalPages];

    const range = (start: number, end: number) =>
      Array.from({ length: end - start + 1 }, (_, i) => start + i);

    // Add first pages
    FIRST_PAGES.forEach(p => {
      if (p >= 1 && p <= totalPages) pages.push(p);
    });

    // Left dots
    if (currentPage > 5) {
      pages.push('...');
    }

    // Middle pages
    range(currentPage - 1, currentPage + 1).forEach(p => {
      if (p > 3 && p < totalPages - 2) pages.push(p);
    });

    // Right dots
    if (currentPage < totalPages - 4) {
      pages.push('...');
    }

    // Add last pages
    LAST_PAGES.forEach(p => {
      if (p > 3 && p <= totalPages) pages.push(p);
    });

    // Remove duplicates
    return [...new Set(pages)];
  }

  const { page = '1' } = await searchParams;
  const currentPage = Number(page);

  const pages = getPaginationPages(currentPage, listProductByCategoryId.data.totalItems);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="md:max-w-7xl lg:max-w-10/12 mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-green-600">Trang chủ</Link>
            <span>/</span>
            <span className="text-green-600 font-semibold">{category?.name}</span>
          </div>
        </div>
      </div>

      {/* Category Header - Redesigned */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-linear-to-br from-green-600 via-green-500 to-emerald-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32"></div>
        </div>

        <div className="max-w-10/12 mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Icon Circle */}
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-5xl md:text-6xl">{category?.icon ? category?.icon : secondIcon.icon}</span>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                {category?.name}
              </h1>
              <p className="text-lg md:text-xl text-white/95 mb-2">
                Đảm bảo chất lượng tốt nhất
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-semibold">Chất lượng cao - Giá tốt nhất</span>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="hidden lg:flex gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center min-w-30">
                <div className="text-3xl font-bold text-white">{listProductByCategoryId?.data.totalItems}</div>
                <div className="text-sm text-white/80">Sản phẩm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Categories Sidebar */}
          <SidebarCategoryUI />
          {/* Main Content */}
          <div className="flex-1">
            <div className="max-w-none bg-linear-to-br from-gray-50 to-gray-100">
              <div className="px-4">
                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                  {listProductByCategoryId.data.items.map((product: any) => (
                    <SimpleProductCard key={product.productId}
                      id={product.productId}
                      productName={product.productName}
                      slug={product.slug}
                      categorySlug={slug}
                      price={product.price}
                      unit={product.unit}
                      image={product.image} />
                  ))}
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className="mt-10 flex justify-center dark:text-black">
              <div className="flex items-center gap-1 sm:gap-2">

                {/* Previous */}
                {currentPage > 1 && (
                  <Link
                    href={`/san-pham/${slug}?page=${currentPage - 1}`}
                    className="px-3 sm:px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    ←
                  </Link>
                )}

                {/* Pages */}
                {pages.map((p, index) =>
                  p === '...' ? (
                    <span
                      key={`dots-${index}`}
                      className="px-2 sm:px-3 py-2 text-gray-400"
                    >
                      …
                    </span>
                  ) : (
                    <Link
                      key={p}
                      href={`/san-pham/${slug}?page=${p}`}
                      className={`min-w-9 h-9 flex items-center justify-center rounded-lg font-semibold text-sm sm:text-base 
                          ${p === currentPage
                          ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                    >
                      {p}
                    </Link>
                  )
                )}

                {/* Next */}
                {currentPage < listProductByCategoryId.data.totalItems && (
                  <Link
                    href={`/san-pham/${slug}?page=${currentPage + 1}`}
                    className="px-3 sm:px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}