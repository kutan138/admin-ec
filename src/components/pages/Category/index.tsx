import BaseHeading from "@/components/ui/heading/BaseHeading";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "@tanstack/react-router";
import type { TreeDataNode } from "antd";
import {
  Button,
  Flex,
  Form,
  Input,
  Switch,
  Tree,
  TreeSelect,
  type GetProps,
} from "antd";
import { Route as CategoryAddRoute } from "@/routes/category/add";

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;

const { Search } = Input;
type SearchProps = GetProps<typeof Input.Search>;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);
const { DirectoryTree } = Tree;

const CategoryPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const categories: TreeDataNode[] = [
    {
      key: "1",
      title: "Thời trang Nữ",
      children: [
        {
          key: "1-1",
          title: "Áo nữ",
        },
        {
          key: "1-2",
          title: "Quần nữ",
        },
      ],
    },
    {
      key: "2",
      title: "Thời trang Nam",
      children: [
        {
          key: "2-1",
          title: "Áo nam",
        },
        {
          key: "2-2",
          title: "Quần nam",
        },
      ],
    },
    {
      key: "3",
      title: "Phụ kiện",
      children: [
        {
          key: "3-1",
          title: "Phụ kiện 1",
        },
        {
          key: "3-2",
          title: "Phụ kiện 2",
        },
      ],
    },
    {
      key: "4",
      title: "Giày dép",
      icon: false,
      children: [
        {
          key: "4-1",
          title: "Giày dép 1",
        },
        {
          key: "4-2",
          title: "Giày dép 2",
        },
      ],
    },
  ];

  const onSelect: DirectoryTreeProps["onSelect"] = (keys, info) => {
    console.log("Trigger Select", keys, info);
  };

  const onAddCategory = () => {
    router.navigate({ to: CategoryAddRoute.id });
  };

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
