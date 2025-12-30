import type { CategoryResponseDto } from "@/api/generated";
import type { TreeDataNode } from "antd";

export const buildCategoryTree = ({
  categories,
  notIncludeIds = [],
}: {
  categories: CategoryResponseDto[];
  notIncludeIds?: string[];
}): TreeDataNode[] => {
  const map = new Map<string, TreeDataNode>();
  const excluded = new Set(notIncludeIds);
  const roots: TreeDataNode[] = [];

  // 1️⃣ tạo map (bỏ qua node bị exclude)
  categories.forEach((c) => {
    if (excluded.has(c.id)) return;

    map.set(c.id, {
      title: c.name,
      key: c.id,
      children: [],
    });
  });

  // 2️⃣ build tree
  categories.forEach((c) => {
    if (excluded.has(c.id)) return;

    const node = map.get(c.id);
    if (!node) return;

    // Nếu parent bị exclude → node cũng bị loại
    if (c.parentId && excluded.has(c.parentId)) return;

    if (!c.parentId) {
      roots.push(node);
    } else {
      const parent = map.get(c.parentId);
      parent?.children?.push(node);
    }
  });

  return roots;
};
