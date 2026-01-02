import type { Permission } from "@/api/generated";
import { ActionButtons } from "@/components/common/ActionButtons";
import type { TableProps } from "antd";
import { Table, Tag } from "antd";
import React from "react";

type Props = {
  data: Permission[];
  onClickEdit: (id: string) => void;
  handleDelete: (id: string) => void;
};

const PermissionList: React.FC<Props> = ({
  data,
  onClickEdit,
  handleDelete,
}) => {
  const columns: TableProps<Permission>["columns"] = [
    {
      title: "Key",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Kích hoạt",
      dataIndex: "isActive",
      key: "isActive",
      render: (_, { isSystem }) => (
        <Tag color={isSystem ? "geekblue" : "green"}>
          {isSystem ? "Hệ thống" : "Default"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <ActionButtons
          onEdit={() => {
            onClickEdit(record.id);
          }}
          onDelete={() => handleDelete(record.id)}
        />
      ),
    },
  ];
  return <Table<Permission> columns={columns} dataSource={data} />;
};

export default PermissionList;
