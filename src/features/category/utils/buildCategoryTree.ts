import type { CategoryResponseDto } from "@/api/generated";
import type { GetProp, TreeProps } from "antd";
import type { DirectoryTreeProps } from "antd/es/tree";

export type DirectoryTreeData = GetProp<DirectoryTreeProps, "treeData">[number];
export type TreeSelectData = GetProp<TreeProps, "treeData">[number];

type Mode = "DirectoryTreeData" | "TreeSelect";

type ModeMap = {
  DirectoryTreeData: DirectoryTreeData;
  TreeSelect: TreeSelectData;
};

type BuildParams<M extends Mode> = {
  categories: CategoryResponseDto[];
  notIncludeIds?: string[];
  mode?: M;
};

/* =======================
   🔹 Overloads
======================= */

export function buildCategoryTree(
  params: BuildParams<"DirectoryTreeData">
): DirectoryTreeData[];

export function buildCategoryTree(
  params: BuildParams<"TreeSelect">
): TreeSelectData[];

/* =======================
   🔹 Implementation
======================= */

export function buildCategoryTree<M extends Mode>({
  categories,
  notIncludeIds = [],
  mode = "DirectoryTreeData" as M,
}: BuildParams<M>): ModeMap[M][] {
  const excluded = new Set(notIncludeIds);
  const nodeMap = new Map<string, ModeMap[M]>();
  const roots: ModeMap[M][] = [];

  const createNode = (c: CategoryResponseDto): ModeMap[M] => {
    if (mode === "DirectoryTreeData") {
      return {
        key: c.id,
        title: c.name,
        children: [],
      } as ModeMap[M];
    }

    return {
      key: c.id,
      value: c.id,
      title: c.name,
      children: [],
    } as ModeMap[M];
  };

  // 1️⃣ Tạo node map
  for (const c of categories) {
    if (excluded.has(c.id)) continue;
    nodeMap.set(c.id, createNode(c));
  }

  // 2️⃣ Build tree
  for (const c of categories) {
    if (excluded.has(c.id)) continue;

    const node = nodeMap.get(c.id);
    if (!node) continue;

    if (!c.parentId || excluded.has(c.parentId)) {
      roots.push(node);
    } else {
      nodeMap.get(c.parentId)?.children?.push(node);
    }
  }

  return roots;
}
