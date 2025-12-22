import BaseHeading from "@/components/common/Heading/BaseHeading";
import { Flex } from "antd";
import CategoryForm from "../components/Form";

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
