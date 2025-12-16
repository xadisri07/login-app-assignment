import { authService } from "@/service/authService";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import "../global.css";
export default function RootLayout() {
  useEffect(() => {
    const checkToken = async () => {
      const authData = await authService.checkToken();
      if (!authData.token) {
        router.replace("/login");
      } else {
        router.replace("/home");
      }
    };
    checkToken();
  }, []);
  const [fontsLoaded] = useFonts({
    Bagel: require("../assets/fonts/BagelFatOne-Regular.ttf"),
  });
  if (!fontsLoaded) return null;
  const toastConfig = {
    success: ({ text1, text2 }: any) => (
      <View style={[styles.toast, styles.success]}>
        <Text style={styles.successTitle}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    ),

    error: ({ text1, text2 }: any) => (
      <View style={[styles.toast, styles.error]}>
        <Text style={styles.errorTitle}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    ),

    info: ({ text1, text2 }: any) => (
      <View style={[styles.toast, styles.info]}>
        <Text style={styles.infoTitle}>{text1}</Text>
        {text2 && <Text style={styles.message}>{text2}</Text>}
      </View>
    ),
  };

  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#514BF3",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      </Stack>
      <Toast config={toastConfig} position="bottom" />
    </>
  );
}
const styles = StyleSheet.create({
  toast: {
    width: "40%",
    padding: 10,
    borderRadius: 12,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  success: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#16a34a",
  },
  error: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dc2626",
  },
  info: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2563eb",
  },
  successTitle: {
    color: "#16a34a",
    fontSize: 10,
    fontWeight: "500",
  },
  errorTitle: {
    color: "#dc2626",
    fontSize: 10,
    fontWeight: "500",
  },
  infoTitle: {
    color: "#2563eb",
    fontSize: 10,
    fontWeight: "500",
  },
  message: {
    color: "#2563eb",
    fontSize: 8,
    marginTop: 4,
  },
});
