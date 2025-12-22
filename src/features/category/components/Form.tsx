import { Form, Input, Select, Switch, Button, Divider } from "antd";

type CategoryFormValues = {
  name?: string;
  slug?: string;
  parent?: string;
  description?: string;
  isActive?: boolean;
};

type Option = { label: string; value: string };

type CategoryFormProps = {
  initialValues?: CategoryFormValues;
  parentOptions?: Option[];
  onSubmit?: (values: CategoryFormValues) => void;
  onCancel?: () => void;
  submitText?: string;
  cancelText?: string;
  loading?: boolean;
};

const defaultParentOptions: Option[] = [
  { value: "none", label: "-- Không có --" },
  { value: "thoi-trang-nu", label: "Thời trang Nữ" },
  { value: "thoi-trang-nam", label: "Thời trang Nam" },
  { value: "phu-kien", label: "Phụ kiện" },
  { value: "giay-dep", label: "Giày dép" },
];

export default function CategoryForm({
  initialValues,
  parentOptions = defaultParentOptions,
  onSubmit,
  onCancel,
  submitText = "Lưu",
  cancelText = "Hủy",
  loading = false,
}: CategoryFormProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <Form
        layout="vertical"
        initialValues={{ isActive: true, parent: "none", ...initialValues }}
        onFinish={onSubmit}
      >
        <Form.Item label="Tên danh mục" name="name">
          <Input placeholder="Ví dụ: Thời trang Nam" />
        </Form.Item>

        <Form.Item
          label="Slug (URL)"
          name="slug"
          extra="Slug là phiên bản URL thân thiện của tên. Thường là chữ thường và chỉ chứa chữ cái, số và dấu gạch ngang."
        >
          <Input placeholder="Ví dụ: thoi-trang-nam" />
        </Form.Item>

        <Form.Item label="Danh mục cha" name="parent">
          <Select>
            {parentOptions.map((opt) => (
              <Select.Option key={opt.value} value={opt.value}>
                {opt.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea
            placeholder="Nhập mô tả ngắn gọn cho danh mục..."
            rows={4}
          />
        </Form.Item>

        <Form.Item
          label="Trạng thái hiển thị"
          name="isActive"
          valuePropName="checked"
        >
          <Switch />
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
  );
}
