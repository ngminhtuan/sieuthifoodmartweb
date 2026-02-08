"use client";

import { useState } from "react";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { useUIStore } from "@/store/ui.store";
import { dummyDataListCategory } from "@/app/utils/DumDataListCategory";

export default function MobileCategorySheet() {
  const { isCategoryOpen, closeCategory } = useUIStore();
  const [openLv1, setOpenLv1] = useState<string | null | undefined | number>(null);
  const [openLv2, setOpenLv2] = useState<string | null | undefined | number>(null);

  return (
    <div
      className={`
        font-bold
        fixed inset-x-0 bottom-0
        h-[85vh]
        bg-white
        rounded-t-2xl
        z-50
        transition-transform duration-300
        ${isCategoryOpen ? "translate-y-0" : "translate-y-full"}
      `}
    >
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-4 h-14 border-b">
        <h2 className="font-black">Danh mục sản phẩm</h2>
        <button onClick={closeCategory}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto h-[calc(85vh-56px)] px-4 py-4 space-y-4">
        {dummyDataListCategory.map((lv1) => {
          const isOpen = openLv1 === lv1.id;

          return (
            <div key={lv1.id ?? lv1.name} className="border rounded-xl">
              <button
                onClick={() => {
                  setOpenLv1(isOpen ? null : lv1.id);
                  setOpenLv2(null);
                }}
                className="w-full flex justify-between items-center p-4 font-medium"
              >
                <div className="flex items-center gap-2">
                  <span>{lv1.icon}</span>
                  {lv1.name}
                </div>
                {isOpen ? <ChevronDown /> : <ChevronRight />}
              </button>

              {isOpen && lv1.children && (
                <div className="px-4 pb-4 space-y-3">
                  {lv1.children.map((lv2) => {
                    const isLv2Open = openLv2 === lv2.id;

                    return (
                      <div key={lv2.id ?? lv2.name}>
                        <button
                          onClick={() =>
                            setOpenLv2(isLv2Open ? null : lv2.id)
                          }
                          className="w-full flex justify-between text-sm font-medium py-2"
                        >
                          {lv2.name}
                          {lv2.children &&
                            (isLv2Open ? <ChevronDown /> : <ChevronRight />)}
                        </button>

                        {isLv2Open && lv2.children && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {lv2.children.map((lv3) => (
                              <button
                                key={lv3.id ?? lv3.name}
                                className="px-3 py-1.5 text-xs rounded-full bg-gray-100"
                              >
                                {lv3.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
