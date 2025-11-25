import BaseHeading from "@/components/ui/heading/BaseHeading";
import CategoryForm from "../components/Form";
import { Flex } from "antd";

const AddCategoryPage = () => {
  return (
    <Flex vertical>
      <BaseHeading
        title="Thêm danh mục mới"
        subtitle="Điền thông tin chi tiết để tạo một danh mục sản phẩm mới."
      />
      <CategoryForm />
    </Flex>
  );
};

export default AddCategoryPage;
