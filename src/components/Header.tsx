'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhone, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="bg-white shadow-md lg:sticky top-0 z-999">
      <div className="max-w xl:max-w-10/12 mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-6609-removebg.png"
              alt="logo"
              width={250}
              height={250}
            />
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-900 font-semibold hover:text-green-600 transition-colors">
              Trang chủ
            </Link>
            <Link href="/cua-hang" className="text-gray-600 hover:text-green-600 transition-colors">
              Cửa hàng
            </Link>
            {/* <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                    Khuyễn mãi
                  </Link>
                  <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                    Tuyển dụng
                  </Link> */}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      className="bg-transparent outline-none text-sm w-32"
                    />
                  </div> */}

            {/* <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all">
                    <FaShoppingCart className="text-white" />
                  </button> */}
            <a
              href="https://thanhvien.sieuthifoodmart.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hidden md:block bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
                Thành viên
              </button>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}