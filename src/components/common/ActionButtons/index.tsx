// columns/actionColumn.tsx
import { Space, Popconfirm, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export type ActionButtonsProps = {
  onEdit?: () => void;
  onDelete?: () => void;

  showEdit?: boolean;
  showDelete?: boolean;

  loadingDelete?: boolean;
};

export const ActionButtons = ({
  onEdit,
  onDelete,
  showEdit = true,
  showDelete = true,
  loadingDelete = false,
}: ActionButtonsProps) => {
  return (
    <Space size="middle">
      {showEdit && onEdit && (
        <Tooltip title="Chỉnh sửa">
          <EditOutlined
            style={{ color: "#1677ff", cursor: "pointer" }}
            onClick={onEdit}
          />
        </Tooltip>
      )}

      {showDelete && onDelete && (
        <Popconfirm
          title="Bạn có chắc muốn xóa?"
          okText="Xóa"
          cancelText="Hủy"
          onConfirm={onDelete}
        >
          <Tooltip title="Xóa">
            <DeleteOutlined
              style={{ color: "#ff4d4f", cursor: "pointer" }}
              spin={loadingDelete}
            />
          </Tooltip>
        </Popconfirm>
      )}
    </Space>
  );
};
