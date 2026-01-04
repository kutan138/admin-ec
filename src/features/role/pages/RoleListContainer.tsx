import BaseHeading from "@/components/common/Heading/BaseHeading";
import { Button, Flex } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import RoleList from "../components/RoleList";

const RoleListContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <Flex justify="space-between" align="flex-end">
        <BaseHeading
          title="Quản lý vai trò"
          subtitle="Danh sách toàn bộ vai trò trong hệ thống"
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          // onClick={onClickAddPermission}
        >
          Thêm vai trò
        </Button>
      </Flex>
      <RoleList
      // data={data}
      // onClickEdit={onClickEditPermission}
      // handleDelete={handleDelete}
      />
    </div>
  );
};

export default RoleListContainer;
