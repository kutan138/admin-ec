import { apiClient } from "@/api/api-client";

const userApi = apiClient.users;

export const userService = {
  getProfile: () => userApi.usersControllerGetProfile(),
};
