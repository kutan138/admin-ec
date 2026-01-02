import { usePermissionAdd } from "@/queries/permission/usePermissionAdd";
import PermissionForm, { type FormValues } from "../components/PermissionForm";
import { usePermissionUI } from "../hooks/usePermissionUI";
import BaseHeading from "@/components/common/Heading/BaseHeading";
import { Form } from "antd";
import { useEffect } from "react";

const CategoryAddContainer = () => {
  const { mutate: addPermission, isPending } = usePermissionAdd();
  const { handleCancel } = usePermissionUI();
  const [form] = Form.useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    addPermission(values);
    form.resetFields();
  };

  useEffect(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className="flex flex-col gap-4">
      <BaseHeading title="Thêm mới quyền hạn" />
      <PermissionForm
        form={form}
        isDisableSystem={false}
        loading={isPending}
        onSubmit={onSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CategoryAddContainer;
