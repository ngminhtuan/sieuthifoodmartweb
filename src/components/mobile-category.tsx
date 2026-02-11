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

const CategoryNodeComponent: React.FC<
  CategoryNodeProps & { level?: number; parentIcon?: string }
> = ({
  id,
  name,
  slug,
  icon,
  parentIcon,
  children,
  onCategoryClick,
  level = 1,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const hasChildren = children && children.length > 0;

  const handleClick = (): void => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    } else if (id && onCategoryClick) {
      onCategoryClick(id, slug);
    }
  };

  /* ===== STYLE THEO CẤP ===== */
  const levelStyles: Record<number, string> = {
    1: "bg-gray-50 font-bold",
    2: "bg-gray-100 font-semibold",
    3: "bg-white font-normal",
  };

  const paddingLeft: Record<number, string> = {
    1: "pl-4",
    2: "pl-8",
    3: "pl-12",
  };

  const iconSize: Record<number, string> = {
    1: "text-xl",
    2: "text-lg",
    3: "text-base",
  };

  // 👉 icon ưu tiên icon của chính nó, nếu không có thì lấy icon cha
  const displayIcon = icon || parentIcon;

  return (
    <div className="border-b border-gray-100">
      <div
        onClick={handleClick}
        className={`
          flex items-center justify-between py-3 pr-4 cursor-pointer
          ${levelStyles[level]}
          ${paddingLeft[level]}
          active:bg-gray-200
        `}
      >
        <div className="flex items-center gap-3 flex-1">
          {displayIcon && (
            <span className={`${iconSize[level]}`}>
              {displayIcon}
            </span>
          )}
          <span className="text-gray-800 text-sm">
            {name}
          </span>
        </div>

        {hasChildren && (
          <div className="text-gray-400">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </div>
        )}
      </div>

      {/* ===== CHILDREN ===== */}
      {hasChildren && isExpanded && (
        <div>
          {children.map((child, index) => (
            <CategoryNodeComponent
              key={child.id || child.slug || index}
              {...child}
              level={level + 1}
              parentIcon={displayIcon}
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
