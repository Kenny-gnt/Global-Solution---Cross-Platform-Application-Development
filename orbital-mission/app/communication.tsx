import { View, Text, StyleSheet } from "react-native";

import { useMission } from "../context/MissionContext";
import { useTheme } from "../context/ThemeContext";

export default function Communication() {
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
        📡 Sistema de Comunicação
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
          Status do Sinal
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          {data.signal}
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
          Latência
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          0.8 s
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
          Pacotes Perdidos
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          1%
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
          Canal Principal
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          Operacional
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
    borderColor: "#22C55E",
  },

  label: {
    color: "#86EFAC",
    fontSize: 16,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
});