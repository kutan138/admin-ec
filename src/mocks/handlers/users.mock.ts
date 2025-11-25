import MockAdapter from "axios-mock-adapter";
import { usersData } from "../data/users.data";
import type { User } from "@/types";

export function setupUsersMock(mock: MockAdapter) {
  // GET /api/users - Lấy danh sách users
  mock.onGet("/api/users").reply(200, {
    success: true,
    data: usersData,
    total: usersData.length,
  });

  // GET /api/users/:id - Lấy user theo ID
  mock.onGet(/\/api\/users\/\d+/).reply((config) => {
    const id = parseInt(config.url?.split("/").pop() || "0");
    const user = usersData.find((u) => u.id === id);

    if (user) {
      return [200, { success: true, data: user }];
    }
    return [404, { success: false, message: "User not found" }];
  });

  // POST /api/users - Tạo user mới
  mock.onPost("/api/users").reply((config) => {
    const newUser: User = {
      id: usersData.length + 1,
      ...JSON.parse(config.data),
    };

    usersData.push(newUser);

    return [201, { success: true, data: newUser }];
  });

  // PUT /api/users/:id - Cập nhật user
  mock.onPut(/\/api\/users\/\d+/).reply((config) => {
    const id = parseInt(config.url?.split("/").pop() || "0");
    const index = usersData.findIndex((u) => u.id === id);

    if (index !== -1) {
      usersData[index] = { ...usersData[index], ...JSON.parse(config.data) };
      return [200, { success: true, data: usersData[index] }];
    }

    return [404, { success: false, message: "User not found" }];
  });

  // DELETE /api/users/:id - Xóa user
  mock.onDelete(/\/api\/users\/\d+/).reply((config) => {
    const id = parseInt(config.url?.split("/").pop() || "0");
    const index = usersData.findIndex((u) => u.id === id);

    if (index !== -1) {
      usersData.splice(index, 1);
      return [200, { success: true, message: "User deleted" }];
    }

    return [404, { success: false, message: "User not found" }];
  });
}
