// src/api/client.ts
import { OpenAPI } from "./generated";

class ApiClient {
  private static instance: ApiClient;

  private constructor() {
    this.configure();
  }

  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  private configure() {
    OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";
    OpenAPI.WITH_CREDENTIALS = true;
    OpenAPI.CREDENTIALS = "include";

    // Token resolver với refresh logic
    OpenAPI.TOKEN = async () => {
      return this.getAccessToken();
    };

    // Dynamic headers
    OpenAPI.HEADERS = async () => {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      const deviceId = this.getDeviceId();
      if (deviceId) {
        headers["X-Device-Id"] = deviceId;
      }

      return headers;
    };
  }

  private async getAccessToken(): Promise<string> {
    const token = localStorage.getItem("access_token");

    if (!token) {
      return "";
    }

    // Check if token expired
    if (this.isTokenExpired(token)) {
      try {
        const newToken = await this.refreshToken();
        return newToken;
      } catch (error) {
        this.handleAuthError();
        return "";
      }
    }

    return token;
  }

  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const exp = payload.exp * 1000; // Convert to milliseconds
      return Date.now() >= exp - 60000; // Refresh 1 min before expiry
    } catch {
      return true;
    }
  }

  private async refreshToken(): Promise<string> {
    const refreshToken = localStorage.getItem("refresh_token");
    if (!refreshToken) {
      throw new Error("No refresh token");
    }

    // Call refresh endpoint
    const response = await fetch(`${OpenAPI.BASE}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Refresh failed");
    }

    const data = await response.json();
    localStorage.setItem("access_token", data.accessToken);
    return data.accessToken;
  }

  private handleAuthError() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login";
  }

  private getDeviceId(): string | null {
    return localStorage.getItem("device_id");
  }

  public setToken(token: string) {
    localStorage.setItem("access_token", token);
  }

  public clearAuth() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }

  public updateBaseUrl(url: string) {
    OpenAPI.BASE = url;
  }
}

// Export singleton instance
export const apiClient = ApiClient.getInstance();
