import type { Permission } from "@/api/generated";
import { SaveOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Switch,
  Typography,
  type FormInstance,
} from "antd";

const { TextArea } = Input;
const { Text } = Typography;

const ACTION_OPTIONS = [
  { label: "Read (Xem)", value: "read" },
  { label: "Create (Tạo)", value: "create" },
  { label: "Update (Cập nhật)", value: "update" },
  { label: "Cancel (Huỷ)", value: "cancel" },
  { label: "Publish (Công bố)", value: "publish" },
  { label: "Asign (Gán quyền)", value: "assign.role" },
];

export type FormValues = {
  module: Permission["module"];
  action: Permission["action"];
  description?: string;
  isSystem?: boolean;
};

type Props = {
  loading: boolean;
  initialValues?: FormValues;
  form: FormInstance<FormValues>;
  isDisableSystem: boolean;
  onSubmit: (formValues: FormValues) => void;
  onDelete?: () => void;
  onCancel: () => void;
};

export default function PermissionForm({
  form,
  onSubmit,
  onCancel,
  onDelete,
  isDisableSystem,
  loading,
}: Props) {
  const module = Form.useWatch("module", form);
  const action = Form.useWatch("action", form);

  return (
    <Card>
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        requiredMark="optional"
      >
        <Row gutter={16}>
          {/* MODULE */}
          <Col span={12}>
            <Form.Item
              label="Tên module"
              name="module"
              rules={[
                { required: true, message: "Vui lòng nhập tên module" },
                {
                  pattern: /^[a-z]+$/,
                  message: "Chỉ dùng chữ thường, không khoảng trắng",
                },
              ]}
            >
              <Input placeholder="vd: user, product, order" />
            </Form.Item>
          </Col>

          {/* ACTION */}
          <Col span={12}>
            <Form.Item
              label="Hành động"
              name="action"
              rules={[{ required: true, message: "Chọn hành động" }]}
            >
              <Select
                placeholder="Chọn hành động CRUD"
                options={ACTION_OPTIONS}
              />
            </Form.Item>
          </Col>

          {/* PREVIEW KEY */}
          <Col span={24}>
            <Text type="secondary">
              Permission key:{" "}
              <Text strong>
                {module && action ? `${module}.${action}` : "--"}
              </Text>
            </Text>
          </Col>

          {/* DESCRIPTION */}
          <Col span={24}>
            <Form.Item label="Mô tả chi tiết" name="description">
              <TextArea
                rows={3}
                placeholder="Mô tả mục đích và phạm vi ảnh hưởng của quyền hạn..."
              />
            </Form.Item>
          </Col>

          {/* SYSTEM FLAG */}
          <Col span={24}>
            <Form.Item
              label="Permission hệ thống"
              name="isSystem"
              valuePropName="checked"
            >
              <Switch disabled={isDisableSystem} />
            </Form.Item>
          </Col>
        </Row>

        {/* ACTION BUTTONS */}
        <Flex align="center">
          {onDelete && (
            <Button danger onClick={onDelete}>
              Xóa
            </Button>
          )}

          <Flex gap={8} style={{ marginLeft: "auto" }}>
            <Button onClick={onCancel}>Hủy</Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<SaveOutlined />}
            >
              Lưu quyền hạn
            </Button>
          </Flex>
        </Flex>
      </Form>
    </Card>
  );
}
