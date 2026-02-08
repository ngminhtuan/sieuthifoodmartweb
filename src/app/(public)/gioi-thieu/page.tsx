// app/about/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  FaShoppingCart, 
  FaSearch, 
  FaUser,
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
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function AboutPage() {
  const stats = [
    { icon: <FaUsers />, number: '50,000+', label: 'Khách hàng tin tưởng', color: 'from-blue-500 to-cyan-600' },
    { icon: <FaShoppingCart />, number: '10,000+', label: 'Sản phẩm chất lượng', color: 'from-green-500 to-emerald-600' },
    { icon: <FaAward />, number: '15+', label: 'Năm kinh nghiệm', color: 'from-orange-500 to-red-600' },
    { icon: <FaGlobeAsia />, number: '100+', label: 'Đối tác toàn cầu', color: 'from-purple-500 to-pink-600' }
  ];

  const features = [
    { 
      icon: <FaLeaf />, 
      title: '100% Tươi Sạch', 
      description: 'Cam kết mang đến sản phẩm tươi ngon, an toàn cho sức khỏe gia đình bạn',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      icon: <FaShieldAlt />, 
      title: 'Chất Lượng Đảm Bảo', 
      description: 'Kiểm tra nghiêm ngặt, đổi trả trong 24h nếu có bất kỳ vấn đề gì',
      color: 'from-purple-500 to-pink-600'
    },
    { 
      icon: <FaAward />, 
      title: 'Giá Tốt Nhất', 
      description: 'Cam kết giá cạnh tranh nhất thị trường, nhiều chương trình khuyến mãi',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const values = [
    { icon: <FaHeart />, title: 'Tận Tâm', desc: 'Phục vụ khách hàng với trái tim' },
    { icon: <FaCheckCircle />, title: 'Chất Lượng', desc: 'Luôn đặt chất lượng lên hàng đầu' },
    { icon: <FaHandshake />, title: 'Uy Tín', desc: 'Xây dựng niềm tin từ mỗi giao dịch' },
    { icon: <FaStar />, title: 'Xuất Sắc', desc: 'Không ngừng cải tiến và hoàn thiện' }
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
              <span className="font-semibold">Hệ Thống Siêu Thị Hàng Đầu Việt Nam</span>
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
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                Mua sắm ngay
              </button>
              <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
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

      {/* About Story */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-600 font-bold text-sm uppercase tracking-wide">Câu chuyện của chúng tôi</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              Hành Trình Mang Sản Phẩm Tươi Sạch Đến Mọi Nhà
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Foodmart được thành lập vào năm 2009 với sứ mệnh mang đến những sản phẩm thực phẩm tươi ngon, an toàn và chất lượng cao cho người tiêu dùng Việt Nam.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Từ một cửa hàng nhỏ, chúng tôi đã phát triển thành hệ thống siêu thị có mặt tại nhiều tỉnh thành, phục vụ hơn 50,000 khách hàng mỗi ngày với hơn 10,000 sản phẩm đa dạng.
            </p>
            <div className="flex gap-4">
              <button className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-linear-to-br from-green-400 to-emerald-600 rounded-3xl shadow-2xl flex items-center justify-center text-white text-4xl font-bold">
              Hình ảnh siêu thị
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-linear-to-r from-orange-400 to-red-500 rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-linear-to-br from-gray-100 to-gray-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold text-sm uppercase tracking-wide">Điểm nổi bật</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
              Tại Sao Chọn Foodmart?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm mua sắm tuyệt vời nhất
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className={`w-16 h-16 bg-linear-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            Nguyên Tắc Hoạt Động
          </h2>
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
            <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
              Đăng ký ngay
            </button>
            <button className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all">
              Liên hệ chúng tôi
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
              <FaPhone />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Hotline</h3>
            <p className="text-gray-600 mb-2">Liên hệ ngay</p>
            <a href="tel:02822188999" className="text-blue-600 font-bold text-xl">028 22 188 999</a>
          </div>

          <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
              <FaEnvelope />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
            <p className="text-gray-600 mb-2">Gửi email cho chúng tôi</p>
            <a href="mailto:info@foodmart.vn" className="text-green-600 font-bold">info@foodmart.vn</a>
          </div>

          <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-linear-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Địa chỉ</h3>
            <p className="text-gray-600 mb-2">Ghé thăm chúng tôi</p>
            <p className="text-orange-600 font-semibold">TP. Hồ Chí Minh</p>
          </div>
        </div>
      </section>
    </div>
  );
}