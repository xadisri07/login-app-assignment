import { StyleSheet, View } from "react-native";

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#d1cffc",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 4,
    marginHorizontal: 12,
  },
});
