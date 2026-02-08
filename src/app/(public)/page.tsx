// app/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import {
  FaLeaf
} from 'react-icons/fa';
import { SimpleProductGrid } from '../../components/ProductCard';
import SidebarCategoryUI from '../utils/SidebarCategoryUI';
import HeroBannerSlider from "@/components/HeroBannerSlider";

export default async function FreshGroceryHome() {

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <HeroBannerSlider />
      <section className='md:max-w-7xl xl:max-w-full mx-auto flex 2xl:justify-around'>
        <SidebarCategoryUI />

        <SimpleProductGrid />
      </section>

      
    </div>
  );
}