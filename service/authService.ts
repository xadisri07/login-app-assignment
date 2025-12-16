import { LoginResponse } from "@/types/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_AUTH_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, type: "customer" }),
      });

      if (!response.ok) {
        let errorMessage = "Login failed";
        try {
          const errorData = await response.json();
          errorMessage =
            errorData.message ||
            errorData.error ||
            `HTTP ${response.status}: ${response.statusText}`;
        } catch {
          errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }
      const data: LoginResponse = await response.json();
      if (data.data?.token) {
        await AsyncStorage.setItem("token", data.data.token);
        await AsyncStorage.setItem("data", JSON.stringify(data.data));
        return {
          ...data,
          token: data.data.token,
        };
      }
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("An unexpected error occurred during login");
    }
  },

  checkToken: async (): Promise<{
    token: string | null;
    user: any | null;
    loginResponse: LoginResponse | null;
  }> => {
    try {
      const token = await AsyncStorage.getItem("token");
      const dataStr = await AsyncStorage.getItem("data");

      if (token && dataStr) {
        const data = JSON.parse(dataStr);
        return {
          token,
          user: data.user || null,
          loginResponse: data || null,
        };
      }
      return {
        token: null,
        user: null,
        loginResponse: null,
      };
    } catch {
      return {
        token: null,
        user: null,
        loginResponse: null,
      };
    }
  },
  logout: async (): Promise<void> => {
    try {
      console.log("Logging out");
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("data");
    } catch {
      // Ignore errors during logout cleanup
    }
  },
};
