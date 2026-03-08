'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronRight, FaHeart, FaHome } from "react-icons/fa";

interface Unit {
    id: number
    productId: number
    unitId: number
    unitName: string
    unitExchange: number
    price: number
    grossProfit: number
    oldPrice: number
    isPrimary: boolean
    barcode: string
    branchId: number
    status: number
}

export default function ProductInteractive({ product }: any) {

    const [selectedImage, setSelectedImage] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const productData = product?.units[0]

    const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null)

    useEffect(() => {
        if (productData?.units?.length > 0) {
            const primaryUnit =
                productData.units.find((u: { isPrimary: any; }) => u.isPrimary) || productData.units[0]
            setSelectedUnit(primaryUnit)
        }
    }, [productData])

    useEffect(() => {
        if (product?.units?.length) {
            setSelectedUnit(product.units[0])
        }
    }, [product])

    function formatVND(number: number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

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

    return (
        <div className="bg-linear-to-br from-gray-50 to-gray-100">

            {/* Product Detail */}
            <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    {/* Product Images */}
                    <div>
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-4 relative">
                            {/* Discount Badge */}
                            {/* <div className="absolute top-4 left-4 bg-linear-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full font-bold shadow-lg z-10">
                                {product.discount}
                            </div> */}

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
                                {!productData ? 'Hết hàng' : `${product1.stock}`}
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                                {product.productName}
                            </h1>
                            <p className="text-xl text-gray-600 mb-4">({product.subtitle ? product.subtitle : product.productCode})</p>

                            {/* Price */}
                            {product.units?.length > 1 && (
                                <div className="flex gap-3 mb-4">
                                    {product.units.map((unit: any) => (
                                        <button
                                            key={unit.id}
                                            onClick={() => setSelectedUnit(unit)}
                                            className={`px-4 py-2 rounded-full border transition
                                                    ${selectedUnit?.id === unit.id
                                                    ? "bg-red-500 text-white border-red-500"
                                                    : "bg-white text-gray-700 hover:border-red-400"
                                                }`}
                                        >
                                            {unit.unitName}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {!productData ? <div className="text-5xl font-bold text-red-500">Hết hàng</div> :
                                <div className="flex items-baseline gap-4 mb-6">
                                    <div className="text-5xl font-bold text-red-500">
                                        {selectedUnit
                                            ? formatVND(selectedUnit.price)
                                            : formatVND(productData.price)
                                        }đ
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}