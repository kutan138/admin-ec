export const roleKeys = {
  all: ["role"] as const,
  detail: (id: string) => [...roleKeys.all, "detail", id] as const,
};
