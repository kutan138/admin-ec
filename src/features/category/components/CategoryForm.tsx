import BaseHeading from "@/components/common/Heading/BaseHeading";
import { Button, Divider, Flex, Form, Input } from "antd";
import { useEffect } from "react";

export type CategoryFormValues = {
  name: string;
  slug?: string;
  parent?: string;
  description?: string;
  isActive?: boolean;
};

type Option = { label: string; value: string };

type CategoryFormProps = {
  mode: "edit" | "add";
  initialValues?: CategoryFormValues;
  parentOptions?: Option[];
  onSubmit?: (values: CategoryFormValues) => void;
  onCancel?: () => void;
  submitText?: string;
  cancelText?: string;
  loading?: boolean;
};

export default function CategoryForm({
  mode,
  initialValues,
  onSubmit,
  onCancel,
  submitText = "Lưu",
  cancelText = "Hủy",
  loading = false,
}: CategoryFormProps) {
  const [form] = Form.useForm<CategoryFormValues>();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        name: initialValues.name,
        description: initialValues.description,
      });
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  return (
    <Flex vertical>
      <BaseHeading
        title={mode === "add" ? "Thêm danh mục mới" : "Chỉnh sửa danh mục"}
        subtitle={
          mode === "add"
            ? "Điền thông tin chi tiết để tạo một danh mục sản phẩm mới."
            : ""
        }
      />
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <Form
          layout="vertical"
          form={form}
          onFinish={onSubmit}
        >
          <Form.Item label="Tên danh mục" name="name">
            <Input placeholder="Ví dụ: Thời trang Nam" />
          </Form.Item>

          <Form.Item label="Mô tả" name="description">
            <Input.TextArea
              placeholder="Nhập mô tả ngắn gọn cho danh mục..."
              rows={4}
            />
          </Form.Item>
          <Divider />

          <Form.Item>
            <div style={{ display: "flex", justifyContent: "end", gap: 12 }}>
              <Button onClick={onCancel}>{cancelText}</Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                {submitText}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
}
