import { CategoryNode } from "./DumDataListCategory";

export function findCategoryBySlug(
  tree: CategoryNode[],
  slug: string
): CategoryNode | null {

  const stack = [...tree];

  while (stack.length) {
    const node = stack.pop()!;

    if (node.slug === slug) {
      return node;
    }

    if (node.children?.length) {
      stack.push(...node.children);
    }
  }

  return null;
}