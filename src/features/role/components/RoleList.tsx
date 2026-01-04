import { ActionButtons } from "@/components/common/ActionButtons";
import { SafetyOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";

type Role = {
  id: string;
  name: string;
  description?: string;
  permissionsCount?: number;
};

type Props = {
  data: Role[];
  isLoading: boolean;
  onClickEdit: (id: string) => void;
};

const RoleList: React.FC<Props> = ({ data, isLoading, onClickEdit }) => {
  const columns = [
    {
      title: "Role",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <Tag color="blue">{name}</Tag>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Permissions",
      dataIndex: "permissionsCount",
      key: "permissionsCount",
      align: "center" as const,
      render: (count: number) => (
        <Tag color={count > 0 ? "green" : "default"}>{count ?? 0}</Tag>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      width: 260,
      render: (_: unknown, record: Role) => (
        <Space>
          <Button
            icon={<SafetyOutlined />}
            onClick={() => onClickEdit(record.id)}
          >
            Quyền
          </Button>

          <ActionButtons onDelete={() => {}} onEdit={() => {}} />
        </Space>
      ),
    },
  ];

  return (
    <Table
      rowKey="id"
      loading={isLoading}
      columns={columns}
      dataSource={data}
    />
  );
};

export default RoleList;
