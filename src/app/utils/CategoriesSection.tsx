import { FaChevronRight } from "react-icons/fa"
import { CategoryNode } from "./DumDataListCategory"
import Link from "next/link";
import { getProductsByCategory } from "@/services/category.service";

type Props = {
  categories: CategoryNode[]
}

export default function CategoryGrid({ categories }: Props) {
  const onCallProduct = getProductsByCategory("", 1)
  const products = [
    { id: 1, name: "Tên sản phẩm mẫu", price: "50.000đ" },
    { id: 2, name: "Tên sản phẩm mẫu", price: "50.000đ" },
    { id: 3, name: "Tên sản phẩm mẫu", price: "50.000đ" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        DANH MỤC SẢN PHẨM
      </h2>

      <div className=" grid grid-cols-2 pb-10 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">{cat.name}</h3>
          </div>
        ))}
      </div>
      <Link
        href="/san-pham/tat-ca-san-pham?page=1"
        className="
        flex items-center gap-2
        w-fit
        mx-auto
        bg-gray-200
        text-gray-700
        font-semibold
        px-6 py-3
        rounded-full
        hover:bg-gray-300
        transition
      "
      >
        XEM TẤT CẢ SẢN PHẨM
        <FaChevronRight className="text-sm" />
      </Link>
    </section>
  )
}