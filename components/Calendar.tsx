import moment from "moment";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CalendarProps {
  onDateSelect?: (date: string) => void;
}

export default function Calendar({ onDateSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD"),
  );

  const startOfMonth = currentMonth.clone().startOf("month");
  const endOfMonth = currentMonth.clone().endOf("month");
  const startDate = startOfMonth.clone().startOf("week");
  const endDate = endOfMonth.clone().endOf("week");

  const days = [];
  let day = startDate.clone();

  while (day.isSameOrBefore(endDate, "day")) {
    days.push(day.clone());
    day.add(1, "day");
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  };

  const goToNextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  };

  const handleDateSelect = (date: moment.Moment) => {
    const dateString = date.format("YYYY-MM-DD");
    setSelectedDate(dateString);
    onDateSelect?.(dateString);
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={goToPreviousMonth} style={styles.arrowButton}>
          <Text style={styles.arrowText}>‹</Text>
        </Pressable>
        <Text style={styles.monthYear}>{currentMonth.format("MMMM YYYY")}</Text>
        <Pressable onPress={goToNextMonth} style={styles.arrowButton}>
          <Text style={styles.arrowText}>›</Text>
        </Pressable>
      </View>

      <View style={styles.weekDays}>
        {weekDays.map((day) => (
          <View key={day} style={styles.weekDay}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.daysContainer}>
        {days.map((day, index) => {
          const isCurrentMonth = day.isSame(currentMonth, "month");
          const isSelected = day.format("YYYY-MM-DD") === selectedDate;
          const isToday = day.isSame(moment(), "day");

          return (
            <Pressable
              key={index}
              onPress={() => handleDateSelect(day)}
              style={[
                styles.day,
                !isCurrentMonth && styles.otherMonthDay,
                isSelected && styles.selectedDay,
                isToday && !isSelected && styles.todayDay,
              ]}
            >
              <Text
                style={[
                  styles.dayText,
                  !isCurrentMonth && styles.otherMonthText,
                  isSelected && styles.selectedText,
                  isToday && !isSelected && styles.todayText,
                ]}
              >
                {day.format("D")}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  arrowButton: {
    padding: 8,
  },
  arrowText: {
    fontSize: 24,
    color: "#514BF3",
    fontWeight: "bold",
  },
  monthYear: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
  },
  weekDays: {
    flexDirection: "row",
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    alignItems: "center",
  },
  weekDayText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#6b7280",
    textTransform: "uppercase",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
  dayText: {
    fontSize: 14,
    color: "#1f2937",
  },
  otherMonthDay: {
    opacity: 0.3,
  },
  otherMonthText: {
    color: "#9ca3af",
  },
  selectedDay: {
    backgroundColor: "#514BF3",
    borderRadius: 20,
  },
  selectedText: {
    color: "#fff",
    fontWeight: "600",
  },
  todayDay: {
    borderWidth: 2,
    borderColor: "#514BF3",
    borderRadius: 20,
  },
  todayText: {
    color: "#514BF3",
    fontWeight: "600",
  },
});
