import { Form, Input, Select, Switch, Button, Divider } from "antd";

export default function CategoryForm() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <Form layout="vertical">
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

        <Form.Item label="Danh mục cha" name="parent" initialValue="none">
          <Select>
            <Select.Option value="none">-- Không có --</Select.Option>
            <Select.Option value="thoi-trang-nu">Thời trang Nữ</Select.Option>
            <Select.Option value="thoi-trang-nam">Thời trang Nam</Select.Option>
            <Select.Option value="phu-kien">Phụ kiện</Select.Option>
            <Select.Option value="giay-dep">Giày dép</Select.Option>
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
            <Button>Hủy</Button>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
