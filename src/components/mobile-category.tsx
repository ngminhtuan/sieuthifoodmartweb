import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Home, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUIStore } from '@/store/ui.store';
import { dummyDataListCategory } from '@/app/utils/DumDataListCategory';

export interface CategoryNode {
  id: number | null | string;
  name: string;
  slug: string;
  icon?: string;
  children?: CategoryNode[];
}

interface CategoryNodeProps extends CategoryNode {
  onCategoryClick?: (categoryId: string | number, slug: string) => void;
}

const CategoryNodeComponent: React.FC<CategoryNodeProps> = ({
  id,
  name,
  slug,
  icon,
  children,
  onCategoryClick
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const hasChildren = children && children.length > 0;

  const handleClick = (): void => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else {
      // Only navigate if category has an id (leaf category with products)
      if (id && onCategoryClick) {
        onCategoryClick(id, slug);
      }
    }
  };

  return (
    <div className="border-b border-gray-100">
      <div
        onClick={handleClick}
        className="flex items-center justify-between p-4 active:bg-gray-50 cursor-pointer"
      >
        <div className="flex items-center gap-3 flex-1">
          {icon && <span className="text-2xl">{icon}</span>}
          <span className="font-medium text-gray-800 text-base">{name}</span>
        </div>
        {hasChildren && (
          <div className="text-gray-400">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </div>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div className="bg-gray-50 pl-4">
          {children.map((child, index) => (
            <CategoryNodeComponent
              key={child.id || child.slug || index}
              {...child}
              onCategoryClick={onCategoryClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const MobileCategoryMenu: React.FC = () => {
  const { isCategoryOpen, closeCategory } = useUIStore();
  const router = useRouter();

  const handleCategoryClick = (categoryId: string | number, slug: string): void => {
    console.log(`Navigating to category ID: ${categoryId}, Slug: ${slug}`);
    closeCategory()
    router.push(`/san-pham/${slug}?page=1`);
  };

  return (
    <div className={`min-h-dvh bg-white max-w-2xl mx-auto font-bold
        fixed inset-x-0 bottom-0
        h-[85dvh]
        rounded-t-2xl
        z-50
        transition-transform duration-300
        ${isCategoryOpen ? "translate-y-0" : "translate-y-full"}`}>
      {/* Header */}
      <div className="sticky top-0 bg-linear-to-r from-green-500 to-green-600 text-white shadow-lg z-10">
        <div className="p-4">
          <div className="flex items-center justify-between gap-3">
            <div className='flex items-center'>
              <Home className="w-6 h-6 mr-3" />
              <h1 className="text-xl font-bold">Danh Mục Sản Phẩm</h1>
            </div>
            <button onClick={closeCategory}>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category List */}
      <div className="overflow-y-auto h-[calc(85dvh-64px)]">
        <div className="pb-6">
          {dummyDataListCategory.map((category, index) => (
            <CategoryNodeComponent
              key={category.id || category.slug || index}
              {...category}
              onCategoryClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCategoryMenu;
