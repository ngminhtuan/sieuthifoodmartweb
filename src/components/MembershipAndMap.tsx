import StoreMap from "@/app/utils/GooglemapStores";
import Link from "next/link";

export default function MembershipAndMap() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-6 mb-10">

      {/* Membership */}
      <div className="bg-gray-100 rounded-2xl p-8 flex flex-col justify-between">

        <div>
          <h3 className="text-xl font-bold mb-4 dark:text-black">
            ĐĂNG KÝ THẺ THÀNH VIÊN FOODMART
          </h3>

          <ul className="space-y-2 text-gray-600 mb-6">
            <li>• Tích điểm cho mỗi lần mua sắm</li>
            <li>• Hưởng nhiều ưu đãi độc quyền</li>
            <li>• Tiện lợi thanh toán nhanh chóng</li>
          </ul>
        </div>

        <a href='https://thanhvien.sieuthifoodmart.com/'
          className="bg-gray-700 text-white px-6 py-3 rounded-lg w-fit"
          target="_blank"
          rel="noopener noreferrer">
          ĐĂNG KÝ NGAY
        </a>

      </div>

      {/* Map */}
      <div className="bg-gray-100 rounded-2xl p-6 flex flex-col">

        <h3 className="text-lg font-semibold mb-4 dark:text-black">
          HỆ THỐNG CỬA HÀNG
        </h3>

        <div className="rounded-xl overflow-hidden h-56">
          <iframe
            src="https://maps.google.com/maps?q=Tang%20tret%20Block%20A-SH18%2C%20107%20Nguyen%20Van%20Linh%2C%20Tan%20Thuan%20Tay%2C%20Quan%207&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          />
        </div>

        <Link href='/cua-hang' className="mt-4 bg-gray-700 text-white px-5 py-2 rounded-lg w-fit">
          XEM TẤT CẢ CỬA HÀNG
        </Link>

      </div>

    </section>
  );
}