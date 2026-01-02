// columns/actionColumn.tsx
import { Space, Popconfirm, Tooltip, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export type ActionButtonsProps = {
  showEdit?: boolean;
  showDelete?: boolean;
  disableDelete?: boolean;
  loadingDelete?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
};

export const ActionButtons = ({
  onEdit,
  onDelete,
  showEdit = true,
  showDelete = true,
  loadingDelete = false,
  disableDelete,
}: ActionButtonsProps) => {
  return (
    <Space size="middle">
      {showEdit && onEdit && (
        <Tooltip title="Chỉnh sửa">
          <Button
            onClick={onEdit}
            icon={<EditOutlined style={{ fontSize: 18 }} />}
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
            <Button
              disabled={disableDelete}
              loading={loadingDelete}
              icon={
                <DeleteOutlined style={{ fontSize: 18 }} spin={loadingDelete} />
              }
            />
          </Tooltip>
        </Popconfirm>
      )}
    </Space>
  );
};
