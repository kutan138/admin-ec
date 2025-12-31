import { useCategoryAdd } from "@/queries/category/useCategoryAdd";
import CategoryForm, {
  type CategoryFormValues,
} from "../components/CategoryForm";

const CategoryAddContainer = () => {
  const { mutate: addCategory, isPending } = useCategoryAdd();

  const onSubmit = (values: CategoryFormValues) => {
    addCategory({
      name: values.name,
      description: values.description,
      parentId: values.parent,
    });
  };

  return <CategoryForm mode="add" onSubmit={onSubmit} loading={isPending} />;
};

export default CategoryAddContainer;
