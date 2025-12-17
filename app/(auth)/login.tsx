import { authService } from "@/service/authService";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const checkToken = async () => {
      const authData = await authService.checkToken();
      if (authData.token) {
        router.replace("/home");
      }
    };
    checkToken();
  }, [router]);

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    try {
      const result = await authService.login(email, password);
      setIsLoading(false);
      if (result.data?.token) {
        router.replace("/home");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Login error:", error);
    }
  };

  return (
    <View className="flex flex-col mx-4 space-y-4 mt-10" >
      <Image
        source={require("../../assets/images/login.png")}
        style={{ width: "100%", height: 240, marginTop: 20 }}
        contentFit="contain"
        transition={200}
      />
      <Text
        className="text-xl text-center tracking-widest text-blue-900"
        style={{ fontFamily: "Bagel", marginBottom: 20 }}
      >
        Customer Login
      </Text>

      <TextInput
        onChangeText={setEmail}
        value={email}
        className="border-2 border-gray-300 rounded-md p-2 w-full"
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        className="border-2 border-gray-300 rounded-md p-2 w-full"
        placeholder="Password"
        secureTextEntry
        style={{ marginBottom: 20 }}
      />

      <Pressable
        onPress={handleLogin}
        disabled={isLoading}
        className={`rounded-md p-3 w-full ${isLoading ? "bg-purple-500" : "bg-[#514BF3]"}`}
      >
        <Text
          className="text-white text-center "
          style={{ fontFamily: "Bagel" }}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Text>
      </Pressable>
    </View>
  );
}
