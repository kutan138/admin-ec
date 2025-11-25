import MockAdapter from "axios-mock-adapter";
import { apiClient } from "../api/axios.config";
import { setupUsersMock } from "./handlers/users.mock";
import { setupAuthMock } from "./handlers/auth.mock";
import { setupProductsMock } from "./handlers/products.mock";

// Check if mock is enabled from environment variable
const isMockEnabled = import.meta.env.VITE_ENABLE_MOCK === "true";
// For Create React App: process.env.REACT_APP_ENABLE_MOCK === 'true'
// For Next.js: process.env.NEXT_PUBLIC_ENABLE_MOCK === 'true'

export function setupMocks() {
  if (!isMockEnabled) {
    console.log("🔴 Mock API is disabled");
    return;
  }

  console.log("🟢 Mock API is enabled");

  // Create mock adapter instance
  const mock = new MockAdapter(apiClient, {
    delayResponse: 300, // Simulate network delay
    onNoMatch: "passthrough", // Pass through requests that don't match
  });

  // Setup all mock handlers
  setupAuthMock(mock);
  setupUsersMock(mock);
  setupProductsMock(mock);

  // Log all mocked requests (useful for debugging)
  apiClient.interceptors.request.use((config) => {
    if (isMockEnabled) {
      console.log(`🎭 [MOCK] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  });

  console.log("✅ All mock handlers registered");
}
