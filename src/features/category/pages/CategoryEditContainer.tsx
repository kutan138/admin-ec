import { useParams } from "@tanstack/react-router";
import CategoryForm from "../components/CategoryForm";
import { Route as CategoryEditRoute } from "@/routes/category/$categoryId";
import { useCategoryDetail } from "../hooks/useCategoryDetail";
import { Spin } from "antd";

const CategoryEditContainer = () => {
  const { categoryId } = useParams({
    from: CategoryEditRoute.id,
  });

  const { data, isPending } = useCategoryDetail(categoryId);
  console.log("🚀 ~ CategoryEditContainer ~ categoryId:", categoryId);

  if (isPending) return <Spin />;

  const initValues = data?.data;
  return (
    <CategoryForm
      mode="edit"
      initialValues={{
        name: initValues?.name ?? "",
        description: initValues?.description,
      }}
    />
  );
};

export default CategoryEditContainer;
