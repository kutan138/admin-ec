import { SaveOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const MODULE_OPTIONS = [
  { label: "User", value: "user" },
  { label: "Product", value: "product" },
  { label: "Order", value: "order" },
  { label: "System", value: "system" },
];

type Props = {
  onSubmit: (formValues: FormValues) => void;
};

export type FormValues = {
  name: string;
  description: string;
  module: string;
};

export default function PermissionForm({ onSubmit }: Props) {
  const [form] = Form.useForm<FormValues>();
  const navigate = useNavigate();

  const onFinish = async (values: FormValues) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark="optional"
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Mã quyền hạn (Key)"
            name="name"
            rules={[
              { required: true, message: "Vui lòng nhập mã quyền hạn" },
              {
                pattern: /^[a-z]+\.[a-z]+$/,
                message: "Định dạng: module.action (vd: product.create)",
              },
            ]}
            extra="Định danh duy nhất, thường dùng dấu chấm (.)"
          >
            <Input placeholder="VD: product.create" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Mô tả chi tiết" name="description">
            <TextArea
              rows={4}
              placeholder="Mô tả mục đích và phạm vi ảnh hưởng của quyền hạn này..."
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Module"
        name="module"
        rules={[{ required: true, message: "Vui lòng chọn module" }]}
      >
        <Select
          placeholder="Chọn module thuộc về..."
          options={MODULE_OPTIONS}
        />
      </Form.Item>

      <Space style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={() => navigate("/permissions")}>Hủy</Button>
        <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
          Lưu quyền hạn
        </Button>
      </Space>
    </Form>
  );
}
