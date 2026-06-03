import { View, Text, StyleSheet } from "react-native";

import { useMission } from "../context/MissionContext";
import { useTheme } from "../context/ThemeContext";

export default function Sensors() {
  const { data } = useMission();
  const { theme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        theme === "solar" && {
          backgroundColor: "#FFF7ED",
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          theme === "solar" && {
            color: "#7C2D12",
          },
        ]}
      >
        🛰 Sensores da Missão
      </Text>

      <View
        style={[
          styles.card,
          theme === "solar" && {
            backgroundColor: "#FFFBEB",
            borderColor: "#F59E0B",
          },
        ]}
      >
        <Text
          style={[
            styles.label,
            theme === "solar" && {
              color: "#92400E",
            },
          ]}
        >
          Temperatura
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          {data.temperature}°C
        </Text>
      </View>

      <View
        style={[
          styles.card,
          theme === "solar" && {
            backgroundColor: "#FFFBEB",
            borderColor: "#F59E0B",
          },
        ]}
      >
        <Text
          style={[
            styles.label,
            theme === "solar" && {
              color: "#92400E",
            },
          ]}
        >
          Pressão
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          102 kPa
        </Text>
      </View>

      <View
        style={[
          styles.card,
          theme === "solar" && {
            backgroundColor: "#FFFBEB",
            borderColor: "#F59E0B",
          },
        ]}
      >
        <Text
          style={[
            styles.label,
            theme === "solar" && {
              color: "#92400E",
            },
          ]}
        >
          Oxigênio
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          97%
        </Text>
      </View>

      <View
        style={[
          styles.card,
          theme === "solar" && {
            backgroundColor: "#FFFBEB",
            borderColor: "#F59E0B",
          },
        ]}
      >
        <Text
          style={[
            styles.label,
            theme === "solar" && {
              color: "#92400E",
            },
          ]}
        >
          Estabilidade Orbital
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          98%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#2563EB",
  },

  label: {
    color: "#93C5FD",
    fontSize: 16,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
});