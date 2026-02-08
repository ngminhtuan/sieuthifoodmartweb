import { create } from "zustand";

export type Product = {
  id: string | number;
  productName: string;
  subtitle?: string;
  categorySlug: string;
  slug: string;
  price: number;
  unit?: string;
  image?: string;
  icon?: string;
  badge?: string;
  badgeLabel?: string;
  discountPercent?: number;
};

type ProductState = {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
  clearSelectedProduct: () => void;
};

export const useProductStore = create<ProductState>((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  clearSelectedProduct: () => set({ selectedProduct: null })
}));