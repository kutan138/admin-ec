import type { Permission } from "@/api/generated";
import { ActionButtons } from "@/components/common/ActionButtons";
import type { TableProps } from "antd";
import { Space, Table, Tag } from "antd";
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
      title: "Module",
      dataIndex: "module",
      key: "module",
      sorter: (a, b) => a.module.localeCompare(b.module),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      filters: [
        { text: "Read", value: "read" },
        { text: "Create", value: "create" },
        { text: "Update", value: "update" },
        { text: "Delete", value: "delete" },
      ],
      onFilter: (value, record) => record.action === value,
    },
    {
      title: "Key",
      dataIndex: "key",
      render: (_, record) => (
        <span style={{ fontWeight: "bold" }}>
          {[record.module, record.action].join(".")}
        </span>
      ),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      ellipsis: true,
    },
    {
      title: "Loại",
      dataIndex: "isSystem",
      key: "isSystem",
      render: (isSystem) => (
        <Tag color={isSystem ? "geekblue" : "default"}>
          {isSystem ? "Hệ thống" : "Custom"}
        </Tag>
      ),
      filters: [
        { text: "Hệ thống", value: true },
        { text: "Custom", value: false },
      ],
      onFilter: (value, record) => record.isSystem === value,
    },
    {
      title: "Thao tác",
      key: "action",
      width: 120,
      render: (_, record) => (
        <Space>
          <ActionButtons
            onEdit={() => onClickEdit(record.id)}
            onDelete={() => handleDelete(record.id)}
            disableDelete={record.isSystem}
          />
        </Space>
      ),
    },
  ];

  return <Table<Permission> columns={columns} dataSource={data} />;
};

export default PermissionList;
