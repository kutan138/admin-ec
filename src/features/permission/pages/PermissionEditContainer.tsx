import { Route as PermissionEditRoute } from "@/routes/_authenticated/permission/$id";
import { useParams } from "@tanstack/react-router";
import PermissionForm, { type FormValues } from "../components/PermissionForm";
import { usePermissionUpdate } from "@/queries/permission/usePermissionUpdate";
import { usePermissionDelete } from "@/queries/permission/usePermissionDelete";
import { Form, Modal } from "antd";
import { usePermissionUI } from "../hooks/usePermissionUI";
import BaseHeading from "@/components/common/Heading/BaseHeading";
import { useEffect } from "react";
import { usePermissionDetail } from "@/queries/permission/usePermissionDetail";

const PermissionEditContainer = () => {
  const { id } = useParams({
    from: PermissionEditRoute.id,
  });
  const { mutate: updateCategory, isPending } = usePermissionUpdate();
  const { mutate: deletePermission } = usePermissionDelete();
  const { data } = usePermissionDetail(id);
  const { handleCancel } = usePermissionUI();
  const [form] = Form.useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    updateCategory({
      id,
      data: {
        name: values.name,
        description: values.description,
      },
    });
  };

  const onDelete = () => {
    Modal.confirm({
      title: "Xác nhận xoá danh mục?",
      content: "Danh mục sẽ bị xoá vĩnh viễn",
      okText: "Xoá",
      okType: "danger",
      centered: true,
      onOk: () => deletePermission(id),
    });
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        name: data.name,
        description: data.description,
      });
    } else {
      form.resetFields();
    }
  }, [data, form]);

  return (
    <div className="flex flex-col gap-4">
      <BaseHeading title="Chỉnh sửa quyền hạn" />
      <PermissionForm
        form={form}
        loading={isPending}
        onSubmit={onSubmit}
        onDelete={onDelete}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default PermissionEditContainer;
