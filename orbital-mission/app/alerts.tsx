import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useMission } from "../context/MissionContext";
import { useTheme } from "../context/ThemeContext";

import Animated, {
  FadeInDown,
} from "react-native-reanimated";

import { LinearGradient } from "expo-linear-gradient";

export default function Alerts() {
  const { data } = useMission();
  const { theme } = useTheme();

  return (
    <LinearGradient
      colors={
        theme === "space"
          ? ["#050816", "#0F172A"]
          : ["#FFF7ED", "#FED7AA"]
      }
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          entering={FadeInDown.duration(900)}
          style={styles.panel}
        >
          <Text
            style={[
              styles.title,
              theme === "solar" && {
                color: "#7C2D12",
              },
            ]}
          >
            Central de Alertas
          </Text>

          <View
            style={[
              styles.alertCard,
              theme === "solar" && {
                backgroundColor: "#FEF3C7",
                borderColor: "#F59E0B",
              },
            ]}
          >
            <Text
              style={[
                styles.alertType,
                theme === "solar" && {
                  color: "#B45309",
                },
              ]}
            >
              ALERTA ATUAL
            </Text>

            <Text
              style={[
                styles.alertMessage,
                theme === "solar" && {
                  color: "#78350F",
                },
              ]}
            >
              {data.alert}
            </Text>
          </View>

          <View
            style={[
              styles.historyCard,
              theme === "solar" && {
                backgroundColor: "#FFFBEB",
                borderColor: "#F59E0B",
              },
            ]}
          >
            <Text
              style={[
                styles.historyTitle,
                theme === "solar" && {
                  color: "#78350F",
                },
              ]}
            >
              Histórico da Missão
            </Text>

            <Text
              style={[
                styles.historyItem,
                theme === "solar" && {
                  color: "#92400E",
                },
              ]}
            >
              ⚠️ Pico de temperatura detectado
            </Text>

            <Text
              style={[
                styles.historyItem,
                theme === "solar" && {
                  color: "#92400E",
                },
              ]}
            >
              ⚡ Oscilação energética corrigida
            </Text>

            <Text
              style={[
                styles.historyItem,
                theme === "solar" && {
                  color: "#92400E",
                },
              ]}
            >
              📡 Comunicação estabilizada
            </Text>

            <Text
              style={[
                styles.historyItem,
                theme === "solar" && {
                  color: "#92400E",
                },
              ]}
            >
              ✅ Sistema orbital normalizado
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  panel: {
    marginTop: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  alertCard: {
    backgroundColor:
      "rgba(127, 29, 29, 0.92)",
    padding: 24,
    borderRadius: 22,
    marginBottom: 24,
    borderWidth: 1,
    borderColor:
      "rgba(248, 113, 113, 0.4)",
  },

  alertType: {
    color: "#FCA5A5",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
  },

  alertMessage: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  historyCard: {
    backgroundColor:
      "rgba(15, 23, 42, 0.92)",
    padding: 24,
    borderRadius: 22,
    borderWidth: 1,
    borderColor:
      "rgba(96, 165, 250, 0.25)",
  },

  historyTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  historyItem: {
    color: "#CBD5E1",
    fontSize: 16,
    marginBottom: 16,
  },
});