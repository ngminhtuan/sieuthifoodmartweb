import { CategoryNode } from "./DumDataListCategory";

export function findCategoryBySlug(
  tree: CategoryNode[],
  slug: string
): CategoryNode | null {
  for (const node of tree) {
    if (node.slug === slug && node.id) {
      return node;
    }

    if (node.children?.length) {
      const found = findCategoryBySlug(node.children, slug);
      if (found) return found;
    }
  }
  return null;
}