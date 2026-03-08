"use client";

import { useState } from "react";

const categories = [
  { icon: "🛒", label: "THỰC PHẨM\nTƯƠI SỐNG" },
  { icon: "🥛", label: "SỮA & SẢN\nPHẨM TỪ SỮA" },
  { icon: "🥤", label: "ĐỒ UỐNG CÁC LOẠI" },
  { icon: "🧴", label: "HÓA PHẨM & CHĂM\nSÓC CÁ NHÂN" },
  { icon: "🍪", label: "BÁNH KẸO &\nĐỒ ĂN VẶT" },
  { icon: "🫙", label: "DẦU ĂN, GIA VỊ\n& ĐỒ KHÔ" },
  { icon: "🥩", label: "ĐỒ ĐÓNG LẠNH" },
  { icon: "❄️", label: "ĐỒ ĐÓNG LẠNH" },
  { icon: "🌿", label: "GIA, DƯỢC,\nLÀNH" },
  { icon: "🍺", label: "BIA, RƯỢU,\nNƯỚC GIẢI KHÁT" },
];

const featuredProducts = [
  { name: "Tên sản phẩm mẫu", price: "50.000đ", stock: "Tình trạng tồn kho" },
  { name: "Tên sản phẩm mẫu", price: "50.000đ", stock: "Tình trạng tồn kho" },
  { name: "Tên sản phẩm mẫu", price: "50.000đ", stock: "Tình trạng tồn kho" },
];

const footerLinks = {
  "VỀ FOODMART": ["Tiên sấu gối đồng", "Hến sứa chia sẻ", "Tạo điểm chăng", "Ruộng điều ua"],
  "CHÍNH SÁCH": ["Luật ngăn", "Đăng relay ấm quởOng", "Cửa dữa đời sẻ ta", "Đăng tờ di đec cjưin mult"],
};

export default function FoodmartHomepage() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: "'Be Vietnam Pro', 'Segoe UI', sans-serif", backgroundColor: "#fff8f8" }}>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-red-100" style={{ backgroundColor: "#c0392b" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <span className="text-xl font-black tracking-tight text-white">FOODMART</span>
          <ul className="flex gap-7 text-sm font-semibold text-red-100">
            {["TRANG CHỦ", "SẢN PHẨM", "CỬA HÀNG", "MEMBERSHIP", "KHUYẾN MÃI", "TUYỂN DỤNG"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-white transition-colors">{item}</li>
            ))}
          </ul>
        </div>
      </nav>

      {/* HERO BANNER */}
      <section className="relative overflow-hidden" style={{
        background: "linear-gradient(135deg, #c0392b 0%, #e74c3c 45%, #f15a4a 70%, #ff6b5b 100%)"
      }}>
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "#fff", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "#fff", transform: "translate(-30%, 30%)" }} />

        <div className="max-w-7xl mx-auto px-6 py-16 flex items-center justify-between gap-8 relative">
          {/* Left */}
          <div className="flex-1 max-w-lg">
            <h1 className="text-4xl font-black leading-tight text-white mb-2 drop-shadow">
              CHUỖI SIÊU THỊ<br />THỰC PHẨM HIỆN ĐẠI
            </h1>
            <p className="text-sm font-semibold text-red-100 mb-2">Thông điệp ngắn rõ của chuỗi bán lẻ</p>
            <p className="text-xs text-red-200 mb-6 leading-relaxed max-w-xs">
              Tổ qnesten gi̊ en, Ne thong hung liên lảng tun tạp clện eng mợi nhể igh hghịol, ęlan ag sien gronor̊ igmia, đa đếi giủr sận ọmện roac kðu.
            </p>
            <button className="bg-white text-red-700 text-sm font-black px-6 py-3 rounded hover:bg-red-50 transition-colors shadow-md">
              XEM NGAY
            </button>
          </div>

          {/* Center illustration placeholder */}
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-48 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
              <span className="text-7xl drop-shadow-lg">🛍️</span>
            </div>
          </div>

          {/* Right - Featured Product Card */}
          <div className="bg-white rounded-xl shadow-2xl p-5 w-64 flex-shrink-0 border-t-4" style={{ borderTopColor: "#c0392b" }}>
            <p className="text-xs font-bold mb-3 uppercase tracking-wide" style={{ color: "#c0392b" }}>SẢN PHẨM NỔI BẬT</p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xl font-black text-gray-900">219.000đ</p>
                <p className="text-sm text-gray-400 line-through">269.000đ</p>
              </div>
              <div className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl" style={{ backgroundColor: "#fff0f0" }}>🥛</div>
            </div>
            <button className="w-full text-white text-xs font-bold py-2.5 rounded transition-colors" style={{ backgroundColor: "#c0392b" }}
              onMouseOver={e => e.target.style.backgroundColor = "#a93226"}
              onMouseOut={e => e.target.style.backgroundColor = "#c0392b"}>
              XEM NGAY
            </button>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex justify-center gap-2 pb-6">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{ backgroundColor: i === activeSlide ? "#fff" : "rgba(255,255,255,0.4)" }}
            />
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-12" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-xl font-black mb-8 tracking-wide" style={{ color: "#c0392b" }}>
            SẢN PHẨM MỚI SẢN PHÁMG
          </h2>
          <div className="grid grid-cols-5 gap-4 mb-4">
            {categories.slice(0, 5).map((cat, i) => (
              <div key={i} className="rounded-lg p-4 flex flex-col items-center gap-3 cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: "#fff0f0", border: "1px solid #ffd5d5" }}>
                <span className="text-3xl">{cat.icon}</span>
                <p className="text-xs font-bold text-center leading-tight whitespace-pre-line" style={{ color: "#7f1d1d" }}>{cat.label}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-4">
            {categories.slice(5).map((cat, i) => (
              <div key={i} className="rounded-lg p-4 flex flex-col items-center gap-3 cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{ backgroundColor: "#fff0f0", border: "1px solid #ffd5d5" }}>
                <span className="text-3xl">{cat.icon}</span>
                <p className="text-xs font-bold text-center leading-tight whitespace-pre-line" style={{ color: "#7f1d1d" }}>{cat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="text-sm font-semibold px-8 py-2.5 rounded transition-colors flex items-center gap-2"
              style={{ border: "1.5px solid #c0392b", color: "#c0392b", backgroundColor: "transparent" }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#fff0f0"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "transparent"}>
              XEM TẤT CẢ SẢN PHẨM <span>›</span>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED / BEST SELLERS */}
      <section className="py-12" style={{ backgroundColor: "#fff8f8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black tracking-wide" style={{ color: "#c0392b" }}>SẢN PHẨM NỔI BẬT / BÁN CHẠY</h2>
            <div className="flex gap-2">
              <button className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                style={{ border: "1.5px solid #c0392b", color: "#c0392b" }}>‹</button>
              <button className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                style={{ border: "1.5px solid #c0392b", color: "#c0392b" }}>›</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm flex gap-4 items-start border border-red-100 hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl" style={{ backgroundColor: "#fff0f0" }}>🛒</div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800 text-sm mb-1">{product.name}</p>
                  <p className="text-base font-black mb-1" style={{ color: "#c0392b" }}>{product.price}</p>
                  <p className="text-xs text-gray-400 mb-3">{product.stock}</p>
                  <button className="text-white text-xs font-bold px-4 py-2 rounded transition-colors"
                    style={{ backgroundColor: "#c0392b" }}
                    onMouseOver={e => e.target.style.backgroundColor = "#a93226"}
                    onMouseOut={e => e.target.style.backgroundColor = "#c0392b"}>
                    XEM CHI TIẾT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP + STORE MAP */}
      <section className="py-12" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-6">
          {/* Membership */}
          <div className="rounded-xl p-8 flex gap-6 items-start" style={{
            background: "linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)"
          }}>
            <div className="flex-1">
              <h3 className="text-xl font-black text-white mb-4 leading-tight">
                ĐĂNG KÝ THẺ<br />THÀNH VIÊN FOODMART
              </h3>
              <ul className="space-y-2 mb-6">
                {["Tích điểm cho mỗi lần mua sắm", "Hưởng nhiều ưu đãi đặc uyện", "Tiện lợi thanh toán nhanh chóng"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-100">
                    <span className="text-white mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-sm font-black px-6 py-2.5 rounded hover:bg-red-50 transition-colors shadow"
                style={{ color: "#c0392b" }}>
                ĐĂNG KÝ NGAY
              </button>
            </div>
            <div className="text-5xl opacity-40">📱</div>
          </div>

          {/* Store Map */}
          <div className="rounded-xl p-6 flex flex-col" style={{ backgroundColor: "#fff0f0", border: "1px solid #ffd5d5" }}>
            <h3 className="text-lg font-black mb-4" style={{ color: "#c0392b" }}>HỆ THỐNG CỬA HÀNG</h3>
            <div className="flex-1 rounded-lg relative overflow-hidden mb-4 min-h-32" style={{ backgroundColor: "#ffd5d5" }}>
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "repeating-linear-gradient(0deg, #c0392b 0, #c0392b 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #c0392b 0, #c0392b 1px, transparent 1px, transparent 60px)"
              }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">📍</div>
            </div>
            <button className="text-sm font-semibold py-2.5 rounded transition-colors flex items-center justify-center gap-2"
              style={{ border: "1.5px solid #c0392b", color: "#c0392b", backgroundColor: "transparent" }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#ffd5d5"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "transparent"}>
              XEM TẤT CẢ CỬA HÀNG <span>›</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-red-100 pt-10 pb-6" style={{ backgroundColor: "#1a0a0a" }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-black text-white mb-3">FOODMART</p>
            <div className="space-y-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-2 rounded w-full" style={{ backgroundColor: "#3d1515" }} />
              ))}
            </div>
          </div>

          {/* Footer columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-black text-red-400 mb-3">{title}</p>
              <ul className="space-y-1.5">
                {links.map((link, i) => (
                  <li key={i} className="flex items-start gap-1 text-xs text-gray-500 cursor-pointer hover:text-red-400 transition-colors">
                    <span>•</span> {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social / App */}
          <div>
            <p className="text-sm font-black text-red-400 mb-3">HỖ TRỢ KHÁCH HÀNG</p>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {["f", "c", "A"].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
                  style={{ backgroundColor: "#3d1515", color: "#ff8a80" }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = "#c0392b"}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = "#3d1515"}>{icon}</div>
              ))}
              {["✉", "A"].map((icon, i) => (
                <div key={i} className="w-9 h-9 rounded flex items-center justify-center text-sm cursor-pointer transition-colors"
                  style={{ backgroundColor: "#3d1515", color: "#ff8a80" }}>{icon}</div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white text-xs font-semibold px-3 py-2 rounded cursor-pointer" style={{ backgroundColor: "#c0392b" }}>
                <span>🍎</span> App Store
              </div>
              <div className="flex items-center gap-2 text-white text-xs font-semibold px-3 py-2 rounded cursor-pointer" style={{ backgroundColor: "#c0392b" }}>
                <span>▶</span> Google Play
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
