import Image from 'next/image';
import { Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

// This would normally come from your API/database
async function getArticleData(slug: string) {
  // Mock data - replace with actual API call
  return {
    id: 1,
    slug: slug,
    title: "Hướng dẫn làm món bánh khoai tây nhân tôm thịt - Lạ miệng, ăn sáng ngon",
    description: "Bánh khoai tây nhân tôm thịt là món ăn sáng ngon miệng, bổ dưỡng và dễ làm. Cùng FoodMart khám phá cách làm chi tiết nhé!",
    author: {
      name: "Nguyễn Văn A",
      avatar: "/images/author-avatar.jpg"
    },
    publishDate: "2025-02-07",
    readTime: "15 phút",
    category: {
      name: "Món Ăn Sáng",
      slug: "mon-an-sang"
    },
    mainImage: "/blog3.jpg",
    content: {
      intro: "Bánh khoai tây nhân tôm thịt là món ăn sáng vừa ngon vừa bổ dưỡng, phù hợp cho cả gia đình. Với hương vị thơm ngon, giòn tan bên ngoài và nhân tôm thịt đậm đà bên trong, món bánh này chắc chắn sẽ khiến bữa sáng của bạn trở nên đặc biệt hơn.",
      ingredients: [
        { name: "Khoai tây", amount: "500g", category: "Nguyên liệu chính" },
        { name: "Tôm tươi", amount: "200g", category: "Nhân" },
        { name: "Thịt heo băm", amount: "150g", category: "Nhân" },
        { name: "Hành tím", amount: "3 củ", category: "Gia vị" },
        { name: "Tỏi", amount: "2 tép", category: "Gia vị" },
        { name: "Trứng gà", amount: "2 quả", category: "Nguyên liệu phụ" },
        { name: "Bột chiên giòn", amount: "100g", category: "Nguyên liệu phụ" },
        { name: "Muối, tiêu, nước mắm", amount: "Vừa đủ", category: "Gia vị" },
        { name: "Dầu ăn", amount: "200ml", category: "Gia vị" }
      ],
      steps: [
        {
          title: "Chuẩn bị nguyên liệu",
          description: "Khoai tây gọt vỏ, rửa sạch rồi luộc chín. Tôm bóc vỏ, bỏ chỉ đen, băm nhỏ. Thịt băm nhuyễn. Hành tím, tỏi bóc vỏ, băm nhỏ.",
          image: "/blog1.jpg",
          tips: "Chọn khoai tây to, tròn đều để dễ nghiền nhuyễn. Tôm nên chọn loại tươi, còn trong để món ăn ngon hơn."
        },
        {
          title: "Làm nhân tôm thịt",
          description: "Phi thơm hành tím, tỏi. Cho thịt băm vào xào săn, tiếp theo thêm tôm băm, nêm nếm gia vị cho vừa ăn. Xào đến khi nhân chín đều thì tắt bếp, để nguội.",
          image: "/blog2.jpg",
          tips: "Không nên xào quá lâu để tôm không bị khô và dai."
        },
        {
          title: "Làm vỏ bánh",
          description: "Khoai tây luộc chín nghiền nhuyễn, thêm 1 quả trứng, một chút muối tiêu, trộn đều. Vo tròn phần khoai tây, ấn dẹp, cho nhân vào giữa rồi gói kín, vo tròn lại.",
          image: "/blog4.jpg",
          tips: "Khoai tây cần nghiền thật nhuyễn để vỏ bánh không bị nứt khi chiên."
        },
        {
          title: "Tráng bột và chiên bánh",
          description: "Đập 1 quả trứng vào bát, đánh tan. Lần lượt nhúng bánh vào trứng, sau đó lăn đều qua bột chiên giòn. Đun nóng dầu, cho bánh vào chiên vàng đều các mặt.",
          image: "/blog5.jpg",
          tips: "Lửa vừa để bánh chín đều, không bị cháy bên ngoài mà bên trong chưa chín."
        },
        {
          title: "Hoàn thành",
          description: "Vớt bánh ra giấy thấm dầu. Xếp bánh ra đĩa, ăn kèm tương ớt hoặc tương cà chua. Thưởng thức khi còn nóng để cảm nhận được vị giòn tan của vỏ bánh.",
          image: "/blog3.jpg",
          tips: "Có thể ăn kèm với rau sống và nước chấm chua ngọt để tăng thêm hương vị."
        }
      ]
    },
    relatedArticles: [
      { id: 2, title: "Cách làm bánh mì kẹp trứng đơn giản", slug: "banh-mi-kep-trung", image: "/banhmikeptrung.webp" },
      { id: 3, title: "Công thức làm phở cuốn ngon như hàng quán", slug: "pho-cuon-ngon", image: "/phocuon.png" },
      { id: 4, title: "Hướng dẫn làm xôi xéo thơm ngon", slug: "xoi-xeo-thom-ngon", image: "/xoixeo.webp" },
      { id: 5, title: "Cách nấu cháo trai ngon bổ dưỡng", slug: "chao-trai-ngon", image: "/chaotrai.jpg" }
    ]
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleData(params.slug);

  // Group ingredients by category
  const groupedIngredients = article.content.ingredients.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof article.content.ingredients>);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b hidden md:block">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">Trang chủ</Link>
            <span>/</span>
            <span className="text-gray-900 line-clamp-1">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="p-6 md:p-8">
            {/* Category Badge */}
            <Link 
              href={`/bai-viet/danh-muc/${article.category.slug}`}
              className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 hover:bg-green-200"
            >
              {article.category.name}
            </Link>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
              {/* <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author.name}</span>
              </div> */}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.publishDate}>
                  {new Date(article.publishDate).toLocaleDateString('vi-VN')}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src={article.mainImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed text-base">
                {article.content.intro}
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Nội dung chính</h2>
              <ol className="space-y-2 text-sm">
                <li className="text-gray-700">
                  <a href="#nguyen-lieu" className="hover:text-green-600">1. Nguyên liệu cần chuẩn bị</a>
                </li>
                <li className="text-gray-700">
                  <a href="#cach-lam" className="hover:text-green-600">2. Các bước thực hiện</a>
                </li>
                <li className="text-gray-700">
                  <a href="#thanh-pham" className="hover:text-green-600">3. Thành phẩm và cách bảo quản</a>
                </li>
              </ol>
            </div>

            {/* Ingredients Section */}
            <section id="nguyen-lieu" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">1</span>
                Nguyên liệu cần chuẩn bị
              </h2>
              
              <div className="bg-linear-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                {Object.entries(groupedIngredients).map(([category, items]) => (
                  <div key={category} className="mb-6 last:mb-0">
                    <h3 className="font-semibold text-gray-800 mb-3 text-base">{category}</h3>
                    <ul className="space-y-2">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-gray-700 flex-1">
                            <strong>{item.name}:</strong> {item.amount}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Steps Section */}
            <section id="cach-lam" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">2</span>
                Các bước thực hiện
              </h2>

              <div className="space-y-8">
                {article.content.steps.map((step, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Bước {index + 1}: {step.title}
                    </h3>
                    
                    {/* Step Image */}
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <p className="text-gray-700 mb-3 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Tips */}
                    {step.tips && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                        <p className="text-sm text-gray-700">
                          <strong className="text-yellow-700">💡 Mẹo hay:</strong> {step.tips}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Final Result Section */}
            <section id="thanh-pham" className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">3</span>
                Thành phẩm và cách bảo quản
              </h2>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Bánh khoai tây nhân tôm thịt sau khi hoàn thành có màu vàng óng, vỏ ngoài giòn tan, bên trong là nhân tôm thịt đậm đà. 
                  Món ăn này nên được thưởng thức ngay khi còn nóng để giữ được độ giòn.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Cách bảo quản:</strong> Nếu không ăn hết, bạn có thể để bánh trong ngăn mát tủ lạnh 1-2 ngày. 
                  Khi ăn, chiên lại trong chảo hoặc nướng lò để bánh giòn trở lại.
                </p>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">Kết luận</h3>
              <p className="leading-relaxed">
                Với hướng dẫn chi tiết trên, hy vọng bạn đã nắm được cách làm bánh khoai tây nhân tôm thịt ngon và hấp dẫn. 
                Đây là món ăn sáng bổ dưỡng, phù hợp cho cả gia đình. Chúc bạn thành công và có bữa sáng ngon miệng!
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-6 border-t">
              <span className="text-sm font-medium text-gray-700">Tags:</span>
              {['Món ăn sáng', 'Công thức nấu ăn', 'Bánh khoai tây', 'Món ăn gia đình'].map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Bài viết liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {article.relatedArticles.map((related) => (
              <Link 
                key={related.id} 
                href={`/bai-viet`}
                className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm mb-1">
                    {related.title}
                  </h3>
                  <span className="text-xs text-green-600 hover:underline">Xem thêm →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
