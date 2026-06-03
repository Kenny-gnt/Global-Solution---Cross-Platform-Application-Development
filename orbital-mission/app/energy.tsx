import { View, Text, StyleSheet } from "react-native";

import { useMission } from "../context/MissionContext";
import { useTheme } from "../context/ThemeContext";

export default function Energy() {
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
        ⚡ Sistema de Energia
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
          Carga Atual
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          {data.energy}%
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
          Consumo Médio
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          12 kW
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
          Painéis Solares
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          Ativos
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
          Baterias
        </Text>

        <Text
          style={[
            styles.value,
            theme === "solar" && {
              color: "#78350F",
            },
          ]}
        >
          Operacionais
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
    borderColor: "#FACC15",
  },

  label: {
    color: "#FDE68A",
    fontSize: 16,
  },

  value: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
});