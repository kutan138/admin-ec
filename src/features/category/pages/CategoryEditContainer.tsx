import { Route as CategoryEditRoute } from "@/routes/category/$categoryId";
import { useParams } from "@tanstack/react-router";
import CategoryForm, { type CategoryFormValues } from "../components/CategoryForm";
import { useCategoryDetail } from "../hooks/useCategoryDetail";
import { useCategoryUpdate } from "../hooks/useCategoryUpdate";

const CategoryEditContainer = () => {
  const { categoryId } = useParams({
    from: CategoryEditRoute.id,
  });
  const { mutate: updateCategory, isPending } = useCategoryUpdate();
  const { data } = useCategoryDetail(categoryId);
  console.log("🚀 ~ CategoryEditContainer ~ data:", data?.data)

  const onSubmit = (values: CategoryFormValues) => {
    updateCategory({ id: categoryId, data: { name: values.name, description: values.description } });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <CategoryForm
      mode="edit"
      initialValues={data?.data}
      onSubmit={onSubmit}
    />
  );
};

export default CategoryEditContainer;
