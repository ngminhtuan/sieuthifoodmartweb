'use client'

import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiSolidOffer } from 'react-icons/bi';
import { IoStorefrontOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';

import { useUIStore } from "@/store/ui.store";

export default function MobileNavBar() {
  const toggleCategory = useUIStore((s) => s.toggleCategory);
  const [activeTab, setActiveTab] = useState('products');
  const isCategoryOpen = useUIStore((s) => s.isCategoryOpen);

  const navItems = [
    { id: 'products', label: 'Trang chủ', icon: AiOutlineHome },
    { id: 'category', label: 'Danh mục', icon: BiSolidOffer },
    { id: 'store', label: 'Cửa hàng', icon: IoStorefrontOutline },
    { id: 'profile', label: 'Cá nhân', icon: FaRegUser }
  ];

  return (
    <nav className={`block lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-30 ${isCategoryOpen ? "hidden" : "fixed bottom-0"}`}>
      <div className="flex justify-around items-center h-16 max-w-screen-sm mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);

                if (item.id === 'category') {
                  toggleCategory();
                }
              }}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${isActive
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              <Icon
                size={24}
                className="mb-1"
              />
              <span className={`text-xs ${isActive ? 'font-semibold' : 'font-normal'}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-12 h-1 bg-green-600 rounded-t-full"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  )
}