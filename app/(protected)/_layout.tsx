import { authService } from "@/service/authService";
import { router, Stack } from "expo-router";
import React, { useEffect } from "react";

export default function ProtectedLayout() {
  useEffect(() => {
    const checkToken = async () => {
      const authData = await authService.checkToken();
      if (!authData.token) {
        router.replace("/login");
      }
    };
    checkToken();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
