import Image from "next/image";

export default function BannerAdvertise() {
    return (
        //Top Bar with Gradient 
        <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1366 / 80",
        }}>
            <Image
                src="/banner.png"
                alt="banner"
                fill
                style={{
                    objectFit: "cover",
                }}
                priority
            />
        </div>
    );
}