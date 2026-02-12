// app/gioi-thieu/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaShoppingCart,
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaAward,
  FaUsers,
  FaHeart,
  FaStar,
  FaCheckCircle,
  FaHandshake,
  FaGlobeAsia,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMicrochip,
  FaBoxOpen,
  FaCreditCard,
  FaStore
} from 'react-icons/fa';

export default function AboutPage() {
  const stats = [
    { icon: <FaUsers />, number: '50,000+', label: 'Khách hàng tin tưởng', color: 'from-blue-500 to-cyan-600' },
    { icon: <FaShoppingCart />, number: '10,000+', label: 'Sản phẩm chất lượng', color: 'from-green-500 to-emerald-600' },
    { icon: <FaStore />, number: '10+', label: 'Cửa hàng tiện ích', color: 'from-orange-500 to-red-600' },
    { icon: <FaGlobeAsia />, number: '100+', label: 'Đối tác toàn cầu', color: 'from-purple-500 to-pink-600' }
  ];

  const coreFeatures = [
    {
      icon: <FaLeaf />,
      title: '100% Tươi Sạch',
      description: 'Rau củ quả hữu cơ, thịt cá tươi mới mỗi ngày từ các nhà cung cấp uy tín',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Chất Lượng Đảm Bảo',
      description: 'Công nghệ giúp theo dõi sát sao hạn sử dụng và quy trình bảo quản thực phẩm',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <FaCreditCard />,
      title: 'Thanh Toán Thông Minh',
      description: 'Hỗ trợ đa dạng phương thức thanh toán không tiền mặt, tích điểm thành viên tự động',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const techAdvantages = [
    { 
      icon: <FaBoxOpen />, 
      title: 'Hàng Hóa Luôn Sẵn Sàng', 
      desc: 'Hệ thống quản trị dữ liệu thời gian thực đảm bảo sản phẩm luôn có sẵn' 
    },
    { 
      icon: <FaMicrochip />, 
      title: 'Kiểm Soát Bằng Số Liệu', 
      desc: 'Theo dõi hạn sử dụng và bảo quản thực phẩm tươi sống' 
    },
    { 
      icon: <FaCreditCard />, 
      title: 'Thanh Toán Nhanh Chóng', 
      desc: 'Đa dạng phương thức thanh toán, tích điểm tự động' 
    },
    { 
      icon: <FaTruck />, 
      title: 'Giao Hàng Phygital', 
      desc: 'Kết hợp cửa hàng vật lý và đặt hàng online tiện lợi' 
    }
  ];

  const values = [
    { icon: <FaHeart />, title: 'Tận Tâm', desc: 'Phục vụ khách hàng với trái tim' },
    { icon: <FaCheckCircle />, title: 'Chất Lượng', desc: 'Luôn đặt chất lượng lên hàng đầu' },
    { icon: <FaHandshake />, title: 'Uy Tín', desc: 'Xây dựng niềm tin từ mỗi giao dịch' },
    { icon: <FaStar />, title: 'Xuất Sắc', desc: 'Không ngừng cải tiến và hoàn thiện' }
  ];

  const storeLocations = [
    {
      area: 'Cụm Quận 7',
      stores: ['Midtown Phú Mỹ Hưng (M8)', 'The Era Town (Đức Khải)', 'Q7 Boulevard', 'Eco Green Sài Gòn']
    },
    {
      area: 'Cụm TP. Thủ Đức',
      stores: ['Vinhomes Grand Park (S2, S5, S7)', 'CitiEsto Cát Lái']
    },
    {
      area: 'Cụm Bình Chánh & Nhà Bè',
      stores: ['Mizuki Flora', 'Saigon Intela']
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-green-600 via-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <FaLeaf className="text-yellow-300" />
              <span className="font-semibold">Chuỗi Siêu Thị Thực Phẩm</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Chào Mừng Đến Với<br />
              <span className="bg-linear-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Foodmart
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Nơi mang đến những sản phẩm tươi ngon, chất lượng cao với giá cả hợp lý nhất cho gia đình Việt
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                  Mua sắm ngay
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto p-4 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className={`w-16 h-16 bg-linear-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-600 font-bold text-2xl uppercase tracking-wide">Triết lý của chúng tôi</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              "Nhỏ Nhưng Đủ"
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Chúng tôi không xây dựng những đại siêu thị xa xôi. Foodmart chọn lọc những vị trí "vàng" ngay tại sảnh các chung cư và khu dân cư nội đô (Quận 7, Quận 2, Quận 9, Bình Chánh...).
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Với diện tích tối ưu, chúng tôi mang đến một không gian mua sắm tinh gọn nhưng đầy đủ mọi mặt hàng thiết yếu, giúp bạn tiết kiệm thời gian di chuyển để dành trọn khoảnh khắc cho gia đình.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-green-400 to-emerald-600 rounded-3xl shadow-2xl overflow-hidden">
              <img src="/introduce1.jpg" alt="Foodmart Store" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Advantages Section */}
      <section className="bg-linear-to-br from-gray-100 to-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-2xl uppercase tracking-wide">Công nghệ hiện đại</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              Hệ Điều Hành Bán Lẻ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sự kết hợp giữa thực phẩm chất lượng và nền tảng công nghệ hiện đại
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techAdvantages.map((advantage, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all border-2 border-gray-100 hover:border-green-500">
                <div className="w-20 h-20 bg-linear-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm uppercase tracking-wide">Sản phẩm đa dạng</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            Hệ Sinh Thái "Tươi - Sạch - Tiện"
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className={`w-16 h-16 bg-linear-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Store Network */}
      <section className="bg-linear-to-br from-blue-50 to-cyan-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">Hệ thống cửa hàng</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              Mạng Lưới Cửa Hàng Foodmart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Phục vụ hàng chục ngàn khách hàng tại các khu đô thị tiêu biểu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {storeLocations.map((location, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{location.area}</h3>
                </div>
                <ul className="space-y-3">
                  {location.stores.map((store, storeIdx) => (
                    <li key={storeIdx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>{store}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold text-sm uppercase tracking-wide">Giá trị cốt lõi</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            Cam Kết Của Chúng Tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vận hành với kỷ luật cao và sự minh bạch tuyệt đối
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all border-2 border-gray-100 hover:border-green-500">
              <div className="w-20 h-20 bg-linear-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-orange-500 via-red-500 to-pink-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mt-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mb-48"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Sẵn Sàng Mua Sắm Cùng Foodmart?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và trải nghiệm mua sắm tuyệt vời
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://thanhvien.sieuthifoodmart.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                Đăng ký ngay
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold text-sm uppercase tracking-wide">Kết nối với chúng tôi</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
            Thông Tin Liên Hệ
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
              <FaPhone />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Hotline</h3>
            <p className="text-gray-600 mb-2">Liên hệ ngay</p>
            <a href="tel:02822188999" className="text-blue-600 font-bold text-xl">0879361361</a>
          </div>

          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
            <p className="text-gray-600 mb-2">Gửi email cho chúng tôi</p>
            <a href="mailto:sieuthifoodmart@gmail.com" className="text-green-600 font-bold text-sm">info@sieuthifoodmart.com</a>
          </div>

          <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Trụ Sở</h3>
            <p className="text-gray-600 mb-2">Ghé thăm chúng tôi</p>
            <p className="text-orange-600 font-semibold text-sm">22/4 Đường Tân Phú, Lô M8, Midtown, Q7, TP.HCM</p>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-2">
            Foodmart — Nơi Công Nghệ Phục Vụ Bữa Ăn Ngon!
          </p>
          <a 
            href="https://sieuthifoodmartweb.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            sieuthifoodmartweb.vercel.app
          </a>
        </div> */}
      </section>
    </div>
  );
}
