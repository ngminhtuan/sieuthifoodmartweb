import Image from "next/image";

export default function FeaturedProducts() {
  const products = [
    { id: 1, name: "Tên sản phẩm mẫu", price: "50.000đ" },
    { id: 2, name: "Tên sản phẩm mẫu", price: "50.000đ" },
    { id: 3, name: "Tên sản phẩm mẫu", price: "50.000đ" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">

      {/* Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold">
          SẢN PHẨM NỔI BẬT / BÁN CHẠY
        </h2>
      </div>

      {/* Product grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm border p-4"
          >

            <div className="bg-gray-100 rounded-lg h-40 mb-4"></div>

            <h3 className="font-medium mb-2">
              {product.name}
            </h3>

            <p className="font-bold mb-2">
              {product.price}
            </p>

            <p className="text-sm text-gray-500 mb-3">
              Tình trạng tồn kho
            </p>

            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm">
              XEM CHI TIẾT
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}