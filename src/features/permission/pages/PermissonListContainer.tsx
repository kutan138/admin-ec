import BaseHeading from "@/components/common/Heading/BaseHeading";
import { Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PermissionList from "../components/PermissionList";
import { usePermissionUI } from "../hooks/usePermissionUI";
import { usePermissionDelete } from "@/queries/permission/usePermissionDelete";
import { useCategoryPermissionList } from "@/queries/permission/usePermissionList";

const PermissonListContainer = () => {
  const { onClickAddPermission, onClickEditPermission } = usePermissionUI();
  const { mutate: handleDelete } = usePermissionDelete();
  const { data = [] } = useCategoryPermissionList();

  return (
    <div className="flex flex-col gap-4">
      <Flex justify="space-between" align="flex-end">
        <BaseHeading
          title="Quản Lý quyền hạn"
          subtitle="Danh sách toàn bộ quyền hạn trong hệ thống"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onClickAddPermission}
        >
          Thêm quyền hạn
        </Button>
      </Flex>
      <PermissionList
        data={data}
        onClickEdit={onClickEditPermission}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default PermissonListContainer;
