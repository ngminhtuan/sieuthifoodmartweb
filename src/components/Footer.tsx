import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4 bg-white/90 backdrop-blur rounded-xl px-5 py-3 shadow-md">
              <Image
                src="/logo-6609-removebg.png"
                alt="logo"
                width={250}
                height={250}
              />
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Siêu thị thực phẩm tươi sống hàng đầu Việt Nam
            </p>

            {/* Social Media Links */}
            {/* <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-linear-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://threads.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-linear-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.541 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.577-3.382 1.494-4.69-.047-.773-.097-1.57.135-2.332.238-.779.691-1.434 1.346-1.948 1.109-.869 2.56-1.081 4.307-.632.902.232 1.762.628 2.556 1.177l-.956 1.804c-.674-.468-1.37-.793-2.07-.967-1.351-.345-2.433-.154-3.214.568-.363.336-.587.733-.706 1.25-.166.724-.123 1.424-.08 2.129.09 1.485.187 3.575-1.956 5.615-1.777 1.69-4.01 2.544-7.036 2.694-.241.012-.477.018-.707.018z"/>
                  </svg>
                </a>
              </div> */}
          </div>

          {['Về chúng tôi'].map((section) => (
            <div key={section}>
              <h3 className="font-bold mb-4">{section}</h3>
              <ul className="flex flex-col space-y-2 text-sm text-gray-400">
                <Link href={"/gioi-thieu"} className="hover:text-white transition-colors" >Giới thiệu</Link>
                <Link href={"/"} className="hover:text-white transition-colors">Tuyển dụng</Link>
                <Link href={"/"} className="hover:text-white transition-colors">Danh sách cửa hàng</Link>
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold mb-4">Hỗ trợ</h3>
            <ul className="flex flex-col space-y-2 text-sm text-gray-400">
              <Link href={"/bai-viet"} className="hover:text-white transition-colors">Blog</Link>
              <Link href={"/"} className="hover:text-white transition-colors">Email</Link>
              <Link href={"/"} className="hover:text-white transition-colors">Chính sách mua hàng</Link>
            </ul>
            <div className="flex gap-4">

            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Liên kết</h3>

            <div className="flex gap-4">
              {[
                { icon: <FaFacebook />, color: 'bg-blue-600', link: 'https://www.facebook.com/sieuthifoodmartsaigon' },
                { icon: <FaInstagram />, color: 'bg-red-600', link: 'https://www.facebook.com/sieuthifoodmartsaigon' },
                { icon: <FaYoutube />, color: 'bg-green-600', link: 'https://www.youtube.com/@SieuthiFoodmart' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open link"
                >
                  <button
                    className={`w-10 h-10 ${social.color} text-white rounded-full flex items-center justify-center hover:scale-110 transition-all`}
                  >
                    {social.icon}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400 text-center md:text-left">
            © 2026 Foodmart. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href={'/'} className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href={"/"} className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>

  );
}