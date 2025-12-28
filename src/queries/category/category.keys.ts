export const categoryKeys = {
  all: ["category"] as const,
  tree: () => [...categoryKeys.all, "tree"] as const,
  detail: (id: string) => [...categoryKeys.all, "detail", id] as const,
};
