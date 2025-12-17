import { authService } from "@/service/authService";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import "../global.css";
export default function HomePageHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authService.logout();
      router.replace("/login");
      Toast.show({ type: "success", text1: "Logged out successfully" });
    } catch (error) {
      Toast.show({ type: "error", text1: `${error}` });
    }
  };

  return (
    <View style={styles.header}>
      <Text
        className="text-right text-xl text-white"
        style={{ fontFamily: "Bagel" }}
      >
        Home Page
      </Text>
      <Pressable onPress={handleLogout} className="p-2 text-right">
        <Ionicons name="log-out-outline" size={24} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#514BF3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingTop: 30,
    marginBottom: 10,
  },
});
