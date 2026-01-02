import type { ReorderCategoryDto } from "@/api/generated";
import type { TreeDataNode } from "antd";

const normalizeParentId = (parentKey: string | null) => {
  if (!parentKey || parentKey === "0") {
    return null;
  }
  return String(parentKey);
};

export const buildReorderPayload = (
  parentId: string | null,
  children: TreeDataNode[]
): ReorderCategoryDto => {
  return {
    parentId: normalizeParentId(parentId),
    items: children.map((item, index) => ({
      id: String(item.key),
      order: index,
    })),
  };
};
