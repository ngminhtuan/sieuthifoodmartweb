'use client';

import Link from 'next/link';
import { dummyDataListCategory } from './DumDataListCategory';

export default function SidebarCategory({ tree }: any) {
  return (
    <aside className="hidden lg:block bg-white dark:text-black rounded-2xl shadow-lg p-4 sticky top-36
        w-70
        shrink-0
        self-start
        z-999">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        📁 Danh mục sản phẩm
      </h3>

      <ul className="space-y-1">
        {dummyDataListCategory.map((lv1) => (
          <li key={lv1.slug} className="relative group">
            {/* ===== LEVEL 1 ===== */}
            {lv1.id ? <Link href={`/san-pham/${lv1.slug}?page=1`} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-green-600 hover:text-white transition">
              <span className="text-xl">{lv1.icon}</span>
              <span className="font-medium">{lv1.name}</span>
            </Link> : <div className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-green-600 hover:text-white transition">
              <span className="text-xl">{lv1.icon}</span>
              <span className="font-medium">{lv1.name}</span>
            </div>}


            {/* ===== LEVEL 2 ===== */}
            {lv1.children && lv1.children?.length > 0 && (
              <div
                className="
                  absolute top-0 left-full
                  hidden group-hover:block
                bg-white shadow-xl rounded-xl p-4
                  min-w-65
                  z-50
                      "
                style={{
                  WebkitFontSmoothing: "antialiased",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <ul className="space-y-2">
                  {lv1.children.map((lv2) => (
                    <li key={lv2.slug} className="relative group/lv2">
                      {/* LEVEL 2 ITEM */}
                      <div className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-green-100 cursor-pointer">
                        {lv2.id ? <Link
                          href={`/san-pham/${lv2.slug}?page=1`}
                          className="block font-medium text-sm"
                        >
                          {lv2.name}
                        </Link> : <div
                          className="font-medium text-sm"
                        >
                          {lv2.name}
                        </div>}
                        {lv2.children && lv2.children?.length > 0 && <span>›</span>}
                      </div>

                      {/* ===== LEVEL 3 ===== */}
                      {lv2.children && lv2.children?.length > 0 && (
                        <div
                          className="
                            absolute top-0 left-full
                            hidden group-hover/lv2:block
    bg-white shadow-xl rounded-xl p-4
    min-w-65
    z-50
  "
                          style={{
                            WebkitFontSmoothing: "antialiased",
                            transform: "translateZ(0)",
                            backfaceVisibility: "hidden",
                          }}
                        >
                          <ul className="space-y-2">
                            {lv2.children.map((lv3) => (
                              <li key={lv3.slug}>
                                <Link
                                  href={`/san-pham/${lv3.slug}?page=1`}
                                  className="
                                    block px-3 py-2 rounded-lg text-sm
                                    hover:bg-green-100 hover:text-green-700
                                    transition
                                  "
                                >
                                  {lv3.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
