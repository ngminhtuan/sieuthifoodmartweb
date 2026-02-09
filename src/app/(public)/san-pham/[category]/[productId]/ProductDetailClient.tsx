'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    FaShoppingCart,
    FaUser,
    FaSearch,
    FaHeart,
    FaStar,
    FaMinus,
    FaPlus,
    FaShareAlt,
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaWhatsapp,
    FaHome,
    FaChevronRight
} from 'react-icons/fa';
import { useProductStore } from '@/store/useProductStore';
import { useRouter } from "next/navigation";

export default function ProductDetailClient() {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
    const [isWishlisted, setIsWishlisted] = useState(false);

    const product: any = useProductStore((state) => state.selectedProduct);
    const router = useRouter()

    useEffect(() => {
        if (!product) {
            router.push("/");
        }
    }, [product, router]);

    if (!product) return null;

    const product1 = {
        name: 'Cold drinks',
        subtitle: 'Sprite',
        price: '18.29',
        originalPrice: '25.00',
        discount: '-20%',
        rating: 4.8,
        reviews: 234,
        stock: 'Còn hàng',
        sku: 'SPR-500-001',
        category: 'Đồ uống',
        brand: 'Sprite',
        weight: '500 gms',
        description: 'Sprite là thức uống có ga với hương vị chanh tươi mát, không chứa caffeine. Sản phẩm được sản xuất theo công nghệ hiện đại, đảm bảo chất lượng và hương vị tuyệt vời. Thích hợp để uống mát vào những ngày nóng bức hoặc kết hợp cùng bữa ăn.',
        images: [
            'from-blue-400 via-green-400 to-green-600',
            'from-green-400 via-emerald-400 to-cyan-600',
            'from-cyan-400 via-blue-400 to-indigo-600',
            'from-emerald-400 via-teal-400 to-green-600'
        ]
    };

    const badgeConfig: any = {
        bestseller: { bg: 'bg-gradient-to-r from-yellow-500 to-orange-600', text: 'BEST', icon: '⭐' },
        new: { bg: 'bg-gradient-to-r from-green-500 to-emerald-600', text: 'NEW', icon: '✨' },
        hot: { bg: 'bg-gradient-to-r from-orange-500 to-red-600', text: 'HOT', icon: '🔥' }
    };

    const relatedProducts = [
        { id: '1', name: 'Cold drinks', subtitle: 'Coca Cola', price: '18.29', badge: 'bestseller', rating: 4.9 },
        { id: '2', name: 'Cold drinks', subtitle: 'Pepsi', price: '17.99', badge: 'new', rating: 4.5 },
        { id: '3', name: 'Cold drinks', subtitle: 'Fanta', price: '18.29', badge: 'hot', rating: 4.7 },
        { id: '4', name: 'Energy Drink', subtitle: 'Red Bull', price: '25.99', rating: 4.6 }
    ];

    function formatVND(number: Number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
                        <Link href="/" className="hover:text-green-600 flex items-center gap-1">
                            <FaHome className="text-xs" />
                            Trang chủ
                        </Link>
                        {/* <Link href="/" className="hover:text-green-600">{product.name}</Link> */}
                        <FaChevronRight className="text-xs" />
                        <span className="text-green-600 font-semibold">{product.productName}</span>
                    </div>
                </div>
            </div>

            {/* Product Detail */}
            <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    {/* Product Images */}
                    <div>
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-4 relative">
                            {/* Discount Badge */}
                            <div className="absolute top-4 left-4 bg-linear-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                                {product.discount}
                            </div>

                            {/* Wishlist Button */}
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all z-10"
                            >
                                <FaHeart className={`text-xl ${isWishlisted ? 'text-red-500' : 'text-gray-300'}`} />
                            </button>

                            {/* Main Image */}
                            <div className={`w-full h-96 bg-linear-to-br ${product1?.images[selectedImage]} rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-4`}>
                                {product.subtitle}
                            </div>

                            {/* Thumbnail Images */}
                            <div className="grid grid-cols-4 gap-3">
                                {product1.images.map((img: any, idx: any) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`h-20 bg-linear-to-br ${img} rounded-xl transition-all ${selectedImage === idx
                                            ? 'ring-4 ring-green-600 scale-105'
                                            : 'opacity-60 hover:opacity-100'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                            <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                {product1.stock}
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                                {product.productName}
                            </h1>
                            <p className="text-xl text-gray-600 mb-4">({product.subtitle ? product.subtitle : product.productName})</p>

                            {/* Rating */}
                            {/* <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`${i < Math.floor(product1.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <span className="text-gray-600">({product1.reviews} đánh giá)</span>
                            </div> */}

                            {/* Price */}
                            <div className="flex items-baseline gap-4 mb-6">
                                <div className="text-5xl font-bold text-red-500">{formatVND(product.price)}đ</div>
                            </div>

                            {/* Product Meta */}
                            {/* <div className="bg-gray-50 rounded-2xl p-6 mb-6 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 font-medium">SKU:</span>
                                    <span className="font-semibold text-gray-900">{product1.sku}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 font-medium">Danh mục:</span>
                                    <Link href={`/category/${product1.category}`} className="font-semibold text-green-600 hover:underline">
                                        {product1.category}
                                    </Link>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 font-medium">Thương hiệu:</span>
                                    <span className="font-semibold text-gray-900">{product1.brand}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-600 font-medium">Khối lượng:</span>
                                    <span className="font-semibold text-gray-900">{product1.weight}</span>
                                </div>
                            </div> */}

                            {/* Quantity Selector */}
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-3">Số lượng:</label>
                                <div className="flex items-center gap-4">
                                    {/* <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all"
                                        >
                                            <FaMinus />
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-20 h-12 text-center font-bold text-xl outline-none"
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition-all"
                                        >
                                            <FaPlus />
                                        </button>
                                    </div> */}
                                    <span className="text-gray-600">Tồn kho: <strong>50</strong> sản phẩm</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            {/* <div className="flex gap-3 mb-6">
                                <button className="flex-1 bg-linear-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                                    <FaShoppingCart />
                                    Thêm vào giỏ hàng
                                </button>
                                <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-all">
                                    <FaShareAlt className="text-gray-700" />
                                </button>
                            </div> */}

                            {/* Share */}
                            {/* <div>
                                <p className="text-gray-600 font-semibold mb-3">Chia sẻ:</p>
                                <div className="flex gap-2">
                                    {[
                                        { icon: <FaFacebook />, color: 'bg-blue-600' },
                                        { icon: <FaTwitter />, color: 'bg-sky-500' },
                                        { icon: <FaPinterest />, color: 'bg-red-600' },
                                        { icon: <FaWhatsapp />, color: 'bg-green-600' }
                                    ].map((social, idx) => (
                                        <button
                                            key={idx}
                                            className={`w-10 h-10 ${social.color} text-white rounded-full flex items-center justify-center hover:scale-110 transition-all`}
                                        >
                                            {social.icon}
                                        </button>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                {/* <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
                    <div className="flex border-b border-gray-200">
                        {['description', 'reviews'].map((tab: any) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-4 font-bold text-lg transition-all ${activeTab === tab
                                    ? 'bg-green-600 text-white'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {tab === 'description' ? 'Mô tả sản phẩm' : 'Đánh giá (234)'}
                            </button>
                        ))}
                    </div>

                    <div className="p-6 md:p-10">
                        {activeTab === 'description' ? (
                            <div className="prose max-w-none">
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">Thông tin chi tiết</h3>
                                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                    {product.description}
                                </p>

                                <h4 className="text-xl font-bold mb-3 text-gray-900">Đặc điểm nổi bật:</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                                    <li>Hương vị chanh tươi mát tự nhiên</li>
                                    <li>Không chứa caffeine</li>
                                    <li>Đóng gói tiện lợi, dễ sử dụng</li>
                                    <li>Nguyên liệu chất lượng cao</li>
                                    <li>Phù hợp cho mọi lứa tuổi</li>
                                </ul>

                                <h4 className="text-xl font-bold mb-3 text-gray-900">Hướng dẫn sử dụng:</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    Lắc đều trước khi uống. Nên uống lạnh để có hương vị tốt nhất.
                                    Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.
                                </p>
                            </div>
                        ) : (
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Đánh giá từ khách hàng</h3>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <FaStar key={i} className={`${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                                        ))}
                                                    </div>
                                                    <div className="text-sm text-gray-600">{product.reviews} đánh giá</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                                        Viết đánh giá
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {[1, 2, 3].map((review) => (
                                        <div key={review} className="bg-gray-50 rounded-2xl p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-linear-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                                                        N
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-gray-900">Nguyễn Văn A</div>
                                                        <div className="flex items-center gap-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <FaStar key={i} className="text-yellow-400 text-xs" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="text-sm text-gray-500">2 ngày trước</span>
                                            </div>
                                            <p className="text-gray-700">
                                                Sản phẩm rất tuyệt vời! Hương vị tươi mát, chất lượng tốt. Giao hàng nhanh chóng.
                                                Tôi sẽ mua lại sản phẩm này.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div> */}

                {/* Related Products */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-gray-900">Sản phẩm liên quan</h2>
                        {/* <Link href="/category/beverages" className="text-green-600 font-semibold hover:underline">
                            Xem tất cả →
                        </Link> */}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {relatedProducts.map((item) => {
                            const badge = item.badge ? badgeConfig[item.badge] : null;
                            return (
                                <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative">
                                    {badge && (
                                        <div className={`absolute top-2 left-2 ${badge.bg} text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg z-10 flex items-center gap-1`}>
                                            <span>{badge.icon}</span>
                                            <span>{badge.text}</span>
                                        </div>
                                    )}

                                    <div className="w-full h-40 bg-linear-to-br from-blue-400 via-green-400 to-green-600 rounded-xl flex items-center justify-center text-white font-bold mb-3 group-hover:scale-110 transition-transform relative">
                                        {item.subtitle}
                                        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                                            <FaHeart className="text-gray-300 text-sm" />
                                        </button>
                                    </div>

                                    <h3 className="text-sm font-semibold text-gray-800 text-center mb-1">{item.name}</h3>
                                    <p className="text-xs text-gray-500 text-center mb-2">({item.subtitle})</p>

                                    <div className="flex items-center justify-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`text-xs ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>

                                    <div className="text-center mb-3">
                                        <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                                    </div>

                                    <button className="w-full bg-linear-to-r from-green-600 to-emerald-600 text-white py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all">
                                        Chi tiết
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}