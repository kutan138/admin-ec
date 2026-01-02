import BaseHeading from "@/components/common/Heading/BaseHeading";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const PermissonList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <BaseHeading
          title="Quản Lý quyền hạn"
          subtitle="Danh sách toàn bộ quyền hạn trong hệ thống"
        />
        <Button icon={<PlusOutlined />}>Thêm quyền hạn</Button>
      </div>
      <div>
        <PermissonList />
      </div>
    </div>
  );
};

export default PermissonList;
