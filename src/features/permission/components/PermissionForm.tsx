import { SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Row,
  type FormInstance,
} from "antd";

const { TextArea } = Input;

export type FormValues = {
  name: string;
  description: string;
  module: string;
};

type Props = {
  loading: boolean;
  initialValues?: FormValues;
  form: FormInstance<FormValues>;
  onSubmit: (formValues: FormValues) => void;
  onDelete?: () => void;
  onCancel: () => void;
};

export default function PermissionForm({
  form,
  onSubmit,
  onCancel,
  onDelete,
}: Props) {
  return (
    <Card>
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
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

        <Flex align="center">
          {onDelete && (
            <Button danger onClick={onDelete}>
              Xoá
            </Button>
          )}

          <Flex gap={8} style={{ marginLeft: "auto" }}>
            <Button onClick={onCancel}>Hủy</Button>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              Lưu quyền hạn
            </Button>
          </Flex>
        </Flex>
      </Form>
    </Card>
  );
}
