export const permissionKeys = {
  all: ["permission"] as const,
  detail: (id: string) => [...permissionKeys.all, "detail", id] as const,
};
