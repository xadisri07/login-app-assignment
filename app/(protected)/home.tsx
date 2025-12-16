import Calendar from "@/components/Calendar";
import HomePageHeader from "@/components/HomePageHeader";
import Card from "@/components/ui/Card";
import { authService } from "@/service/authService";
import { User } from "@/types/data";
import { router } from "expo-router";

import moment from "moment";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      const authData = await authService.checkToken();
      if (!authData.token || !authData.user) {
        router.replace("/login");
      } else {
        setUser(authData.user);
      }
    };
    loadUserData();
  }, []);

  const handleDateSelect = (date: string) => {
    Toast.show({ type: "info", text1: "Selected date: ", text2: date });
  };

  if (!user) {
    return null; // or a loading spinner
  }
  return (
    <View style={styles.card}>
      <HomePageHeader />
      <Card>
        <Text
          className="text-xl  text-start tracking-widest text-blue-950"
          style={{ fontFamily: "Bagel" }}
        >
          Hey! {user.account.firstName}{" "}
        </Text>
        <Text className="text-sm font-light text-start">
          Welcome to the Evijhai!✨
        </Text>
      </Card>
      <Card>
        <Text className="text-sm  text-start  text-blue-950">
          Email: {user.email}
        </Text>
        <Text className="text-xs  text-start text-blue-950">
          Created At:{" "}
          {moment(user.createdAt).format("MMMM DD, YYYY [at] h:mm A")}
        </Text>
        <Text className="text-xs  text-start text-blue-950">
          Organization: {user.account.organization.companyName}
        </Text>
        <Text className="text-xs  text-start text-blue-950">
          Address:{" "}
          {user.account.organization.city +
            "," +
            user.account.organization.country}
        </Text>
      </Card>
      <Calendar onDateSelect={handleDateSelect} />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    marginTop: 12,
  },
});
