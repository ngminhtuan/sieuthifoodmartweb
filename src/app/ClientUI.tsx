"use client";

import { useUIStore } from "@/store/ui.store";
import MobileCategorySheet from "@/components/MobileCategorySheet";
import MobileCategoryMenu from "@/components/mobile-category";

export default function ClientUI() {
  const { isCategoryOpen, closeCategory } = useUIStore();

  return (
    <>
      {/* Mobile Category Sheet – CHỈ MOBILE */}
      <div className="lg:hidden">
        <MobileCategoryMenu />
      </div>
      {/* Overlay – CHỈ MOBILE */}
      {isCategoryOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={closeCategory}
        />
      )}


    </>
  );
}