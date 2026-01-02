import { usePermissionAdd } from "@/queries/permission/usePermissionAdd";
import PermissionForm, { type FormValues } from "../components/PermissionForm";

const CategoryAddContainer = () => {
  const { mutate: addPermission, isPending } = usePermissionAdd();

  const onSubmit = (values: FormValues) => {
    addPermission({
      name: values.name,
      description: values.description,
    });
  };

  return <PermissionForm mode="add" onSubmit={onSubmit} loading={isPending} />;
};

export default CategoryAddContainer;
