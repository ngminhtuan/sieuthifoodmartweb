// app/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";
import {
  FaLeaf
} from 'react-icons/fa';
import SimpleProductGrid from '@/components/ProductGrid';
import SidebarCategoryUI from '../utils/SidebarCategoryUI';
import HeroBannerSlider from "@/components/HeroBannerSlider";
import BannerAdvertise from "@/components/BannerAdvertise";
import CategoryGrid from "../utils/CategoriesSection";
import { dummyDataListCategory, dummyDataListCategoryHome } from "../utils/DumDataListCategory";
import MembershipAndMap from "@/components/MembershipAndMap";
import FeaturedProducts from "@/components/FeaturedProducts";

export default async function FreshGroceryHome() {

  return (
    <div className="min-h-screen bg-white">
      {/* <BannerAdvertise /> */}
      {/* Hero Section */}
      <HeroBannerSlider />
      <CategoryGrid categories={dummyDataListCategoryHome} />
      {/* <section className='md:max-w-7xl xl:max-w-full mx-auto flex 2xl:justify-around'>
        <SidebarCategoryUI />

        <SimpleProductGrid />
      </section> */}
      <SimpleProductGrid />
      <MembershipAndMap />
    </div>
  );
}