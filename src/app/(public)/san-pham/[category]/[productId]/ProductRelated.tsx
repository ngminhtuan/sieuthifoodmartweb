import SimpleProductCard from "@/components/ProductCard";
import { getProductsRelated } from "@/services/category.service";


export default async function ProductRelated(props: any) {
    const relatedList = await getProductsRelated(props.categoryId);

    if (!relatedList?.length) return null;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Sản phẩm liên quan</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedList.map((item: any, index: any) => {
                    return (
                        <SimpleProductCard key={index}
                            productId={item.productId}
                            productName={item.productName}
                            slug={item.productId}
                            categorySlug={item.categorySlug}
                            price={item.price}
                            unit={item.unit}
                            image={item.image}
                            subtitle={''}
                            discountPercent={undefined} />
                    );
                })}
            </div>
        </div>
    )

}



