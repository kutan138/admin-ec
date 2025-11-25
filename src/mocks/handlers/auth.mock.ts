import MockAdapter from "axios-mock-adapter";
import { authData } from "../data/auth.data";
import { usersData } from "../data/users.data";
import type { AuthResponse, LoginRequest } from "@/types";

export function setupAuthMock(mock: MockAdapter) {
  // POST /api/auth/login
  mock.onPost("/api/auth/login").reply((config) => {
    const { email, password }: LoginRequest = JSON.parse(config.data);

    // Simulate delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValid = authData.validCredentials.some(
          (cred) => cred.email === email && cred.password === password
        );

        if (isValid) {
          const user = usersData.find((u) => u.email === email) || usersData[0];
          const response: AuthResponse = {
            token: authData.mockToken,
            user,
          };

          resolve([200, { success: true, data: response }]);
        } else {
          resolve([
            401,
            {
              success: false,
              message: "Email hoặc mật khẩu không đúng",
            },
          ]);
        }
      }, 500); // Simulate network delay
    });
  });

  // POST /api/auth/logout
  mock.onPost("/api/auth/logout").reply(200, {
    success: true,
    message: "Logout successful",
  });

  // GET /api/auth/me
  mock.onGet("/api/auth/me").reply((config) => {
    const token = config.headers?.Authorization?.replace("Bearer ", "");

    if (token === authData.mockToken) {
      return [200, { success: true, data: usersData[0] }];
    }

    return [401, { success: false, message: "Unauthorized" }];
  });
}
