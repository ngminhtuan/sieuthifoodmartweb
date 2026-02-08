'use client'

export default function BannerAdvertise() {
    return (
        //Top Bar with Gradient 
        <section className="bg-linear-to-r from-red-500 via-pink-500 to-red-600 text-white text-center py-2.5 text-sm overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="animate-marquee whitespace-nowrap inline-block relative z-10 font-medium">
                Chào mừng bạn đến với Hệ thống siêu thị FOODMART
            </div>
            <style jsx>{
                `@keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }`}
            </style>
        </section>

    );
}