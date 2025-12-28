import CategoryForm, {
  type CategoryFormValues,
} from "../components/CategoryForm";
import { useCategoryAdd } from "../hooks/useCategoryAdd";

const CategoryAddContainer = () => {
  const { mutate: addCategory, isPending } = useCategoryAdd();

  const onSubmit = (values: CategoryFormValues) => {
    addCategory({ name: values.name, description: values.description });
  };

  return <CategoryForm mode="add" onSubmit={onSubmit} loading={isPending} />;
};

export default CategoryAddContainer;
