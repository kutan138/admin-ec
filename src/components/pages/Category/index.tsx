import BaseHeading from "@/components/ui/heading/BaseHeading";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Form,
  Input,
  Switch,
  Tree,
  TreeSelect,
} from "antd";
import { useCategoryTree } from "./hooks/useCategoryTree";
const { Search } = Input;
const { DirectoryTree } = Tree;

const CategoryPage = () => {
  const [form] = Form.useForm();
  const { categories, onSelect, onAddCategory, onSearch } = useCategoryTree();

  return (
    <div className="flex flex-col gap-4">
      <BaseHeading
        title="Quản Lý Danh mục Sản Phẩm"
        subtitle="Thêm, sửa, xóa danh mục sản phẩm cho cửa hàng của bạn"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* <!-- Left Column: Category Tree --> */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Danh sách danh mục</h2>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={onAddCategory}
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
              className="text-md"
              onSelect={onSelect}
              treeData={categories}
            />
          </div>
        </div>
        {/* <!-- Right Column: Edit Form --> */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 self-start">
          <h2 className="text-lg font-semibold text-gray-900  mb-6">
            Chỉnh sửa thông tin danh mục
          </h2>
          <Form form={form} layout="vertical">
            <Form.Item label="Tên danh mục">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Slug">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Danh mục cha">
              <TreeSelect placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Mô tả">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              label="Trạng thái hiển thị"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Switch />
            </Form.Item>
            <Flex justify="flex-end" gap={20}>
              <Form.Item>
                <Button size="large" type="default">
                  Huỷ
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large">
                  Lưu thay đổi
                </Button>
              </Form.Item>
            </Flex>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
