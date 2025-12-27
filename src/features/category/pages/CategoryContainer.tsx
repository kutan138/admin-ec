import BaseHeading from "@/components/common/Heading/BaseHeading";
import { useCategoryTree } from "@/features/category/hooks/useCategoryTree";
import { PlusOutlined } from "@ant-design/icons";
import { Outlet } from "@tanstack/react-router";
import { Button, Input, Tree } from "antd";

const { Search } = Input;
const { DirectoryTree } = Tree;

const CategoryLayout = () => {
  const { categorytreeData, onSelect, onClickAddCategory, onSearch } =
    useCategoryTree();

  return (
    <div className="flex flex-col gap-4">
      <BaseHeading
        title="Quản Lý Danh mục Sản Phẩm"
        subtitle="Thêm, sửa, xóa danh mục sản phẩm cho cửa hàng của bạn"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-2xl">
        {/* <!-- Left Column: Category Tree --> */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Danh sách danh mục</h2>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={onClickAddCategory}
            />
          </div>
          {/* <!-- SearchBar --> */}
          <div className="mb-4">
            <Search
              placeholder="Tìm kiếm danh mục"
              onSearch={onSearch}
              enterButton
              size="large"
            />
          </div>
          {/* <!-- Category List Items --> */}
          <div className="space-y-1">
            <DirectoryTree
              multiple
              draggable
              expandAction={false}
              defaultExpandAll
              onSelect={onSelect}
              treeData={categorytreeData}
              className="text-md
    [&_.ant-tree-node-content-wrapper]:flex
    [&_.ant-tree-node-content-wrapper]:items-center
    [&_.ant-tree-node-content-wrapper]:min-h-2
    [&_.ant-tree-node-content-wrapper]:px-1
    [&_.ant-tree-node-content-wrapper]:py-1
    [&_.ant-tree-draggable-icon]:self-center"
            />
          </div>
        </div>
        {/* <!-- Right Column: Form --> */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 self-start">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;
