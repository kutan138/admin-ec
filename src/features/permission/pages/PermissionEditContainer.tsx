import { Route as CategoryEditRoute } from "@/routes/category/$categoryId";
import { useParams } from "@tanstack/react-router";
import CategoryForm, {
  type CategoryFormValues,
} from "../components/PermissionForm";
import { useCategoryUpdate } from "@/queries/category/useCategoryUpdate";
import { useCategoryDetail } from "@/queries/category/useCategoryDetail";
import { useCategoryDelete } from "@/queries/category/useCategoryDelete";
import { Modal } from "antd";

const CategoryEditContainer = () => {
  const { categoryId } = useParams({
    from: CategoryEditRoute.id,
  });
  const { mutate: updateCategory, isPending } = useCategoryUpdate();
  const { data } = useCategoryDetail(categoryId);
  const { mutate: deleteCategory } = useCategoryDelete();

  const onSubmit = (values: CategoryFormValues) => {
    updateCategory({
      id: categoryId,
      data: {
        name: values.name,
        description: values.description,
        parentId: values.parent,
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
      onOk: () => deleteCategory(categoryId),
    });
  };

  return (
    <CategoryForm
      categoryId={categoryId}
      mode="edit"
      initialValues={data}
      loading={isPending}
      onDelete={onDelete}
      onSubmit={onSubmit}
    />
  );
};

export default CategoryEditContainer;
