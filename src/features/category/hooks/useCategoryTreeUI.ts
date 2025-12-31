import { useCategoryReorder } from "@/queries/category/useCategoryReorder";
import { useCategoryTree } from "@/queries/category/useCategoryTree";
import { Route as CategoryEditRoute } from "@/routes/category/$categoryId";
import { Route as CategoryAddRoute } from "@/routes/category/add";
import type { Key } from "@rc-component/tree/lib/interface";
import { useRouter } from "@tanstack/react-router";
import type { TreeDataNode, TreeProps } from "antd";
import type { SearchProps } from "antd/es/input";
import type { DirectoryTreeProps } from "antd/es/tree";
import { useCallback, useMemo, useState } from "react";
import { buildCategoryTree } from "../utils/buildCategoryTree";
import { buildReorderPayload } from "../utils/buildReorderPayload";

export const useCategoryTreeUI = () => {
  const router = useRouter();
  const { data = [], isLoading } = useCategoryTree();
  const { mutate: reorderCategories } = useCategoryReorder();
  const categorytreeData = useMemo(
    () => buildCategoryTree({ categories: data }),
    [data]
  );
  console.log("🚀 ~ useCategoryTreeUI ~ categorytreeData:", categorytreeData);

  // null = chưa drag, dùng server data
  const [gData, setGData] = useState<TreeDataNode[]>([]);

  const treeData = gData.length ? gData : categorytreeData;

  const onDrop: TreeProps["onDrop"] = (info) => {
    const dropKey = String(info.node.key);
    const dragKey = String(info.dragNode.key);

    const data = [...categorytreeData];

    let dragObj!: TreeDataNode;

    const loop = (
      nodes: TreeDataNode[],
      key: React.Key,
      callback: (node: TreeDataNode, index: number, arr: TreeDataNode[]) => void
    ) => {
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].key === key) {
          return callback(nodes[i], i, nodes);
        }
        if (nodes[i].children) {
          loop(nodes[i].children!, key, callback);
        }
      }
    };

    // 1️⃣ Remove drag node
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    let parentId: string | null = null;
    let siblings: TreeDataNode[] = [];

    if (!info.dropToGap) {
      // 2️⃣ Drop vào node → làm con
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
        parentId = dropKey;
        siblings = item.children;
      });
    } else {
      // 3️⃣ Drop cùng level
      let arr: TreeDataNode[] = [];
      let index = 0;

      loop(data, dropKey, (_item, i, a) => {
        arr = a;
        index = i;
      });

      const dropPos = info.node.pos.split("-");
      const dropPosition =
        info.dropPosition - Number(dropPos[dropPos.length - 1]);

      if (dropPosition === -1) {
        arr.splice(index, 0, dragObj);
      } else {
        arr.splice(index + 1, 0, dragObj);
      }

      siblings = arr;
      const pos = info.node.pos.split("-");
      parentId = pos.length > 1 ? String(pos[pos.length - 2]) : null;
    }

    setGData(data);
    console.log("🚀 ~ onDrop ~ data:", data);
    // 4️⃣ CALL API reorder
    reorderCategories(buildReorderPayload(parentId, siblings));
  };

  const onSelect: DirectoryTreeProps["onSelect"] = (keys: Key[]) => {
    if (!keys.length) return;

    router.navigate({
      to: CategoryEditRoute.id,
      params: {
        categoryId: String(keys[0]),
      },
    });
  };

  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
  };

  const onClickAddCategory = useCallback(() => {
    router.navigate({ to: CategoryAddRoute.id });
  }, [router]);

  return {
    categorytreeData: treeData,
    isLoading,
    onSearch,
    onSelect,
    onDrop,
    onClickAddCategory,
  };
};
