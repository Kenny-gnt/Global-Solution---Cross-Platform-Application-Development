import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

import { useMission } from "../context/MissionContext";
import { useTheme } from "../context/ThemeContext";

import Animated, {
  FadeInDown,
  FadeIn,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles/HomeStyles";

export default function Home() {
  const { data } = useMission();
  const { theme } = useTheme();
  const rotation = useSharedValue(0);

rotation.value = withRepeat(
  withTiming(360, {
    duration: 30000,
    easing: Easing.linear,
  }),
  -1,
  false
);

const animatedImageStyle =
  useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${rotation.value}deg`,
      },
    ],
  }));
  
  return (
    <LinearGradient
      colors={
        theme === "space"
          ? ["#050816", "#0F172A", "#111827"]
          : ["#FFF7ED", "#FED7AA", "#FDBA74"]
      }
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View
          entering={FadeIn.duration(1200)}
          style={styles.hero}
        >
          <Animated.Image
            source={
              theme === "space"
                ? require("../assets/images/orbital.jpg")
               : require("../assets/images/solar.jpg")
          }
           style={[
             styles.heroImage,
             animatedImageStyle,
             theme === "solar" && {
               borderColor: "#F59E0B",
               shadowColor: "#F59E0B",
            },
           ]}
          />

          <Text
            style={[
              styles.mainTitle,
              theme === "solar" && {
                color: "#7C2D12",
              },
            ]}
          >
            O GIRO ORBITAL
          </Text>

          <Text
            style={[
              styles.subtitle,
              theme === "solar" && {
                color: "#B45309",
              },
            ]}
          >
            INDÚSTRIA ESPACIAL MODERNA
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(800)}
          style={[
            styles.card,
            theme === "solar" && {
              backgroundColor: "#FFF7ED",
              borderColor: "#F59E0B",
            },
          ]}
        >
          <View style={styles.row}>
            <Ionicons
              name="thermometer"
              size={22}
              color={
                theme === "solar"
                  ? "#F59E0B"
                  : "#38BDF8"
              }
            />

            <Text
              style={[
                styles.cardTitle,
                theme === "solar" && {
                  color: "#92400E",
                },
              ]}
            >
              Temperatura Orbital
            </Text>
          </View>

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
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(1000)}
          style={[
            styles.card,
            theme === "solar" && {
              backgroundColor: "#FFF7ED",
              borderColor: "#F59E0B",
            },
          ]}
        >
          <View style={styles.row}>
            <Ionicons
              name="flash"
              size={22}
              color="#FACC15"
            />

            <Text
              style={[
                styles.cardTitle,
                theme === "solar" && {
                  color: "#92400E",
                },
              ]}
            >
              Energia da Estação
            </Text>
          </View>

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
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(1200)}
          style={[
            styles.card,
            theme === "solar" && {
              backgroundColor: "#FFF7ED",
              borderColor: "#F59E0B",
            },
          ]}
        >
          <View style={styles.row}>
            <Ionicons
              name="radio"
              size={22}
              color="#4ADE80"
            />

            <Text
              style={[
                styles.cardTitle,
                theme === "solar" && {
                  color: "#92400E",
                },
              ]}
            >
              Comunicação
            </Text>
          </View>

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
        </Animated.View>

        <View
          style={[
            styles.alertCard,
            {
              backgroundColor:
                data.alert ===
                "Sistema operando normalmente"
                  ? "rgba(20, 83, 45, 0.9)"
                  : "rgba(127, 29, 29, 0.9)",
            },
          ]}
        >
          <Text style={styles.alertTitle}>
            ALERTA DA MISSÃO
          </Text>

          <Text style={styles.alertText}>
            {data.alert}
          </Text>
        </View>

        {[
          ["🛰", "Sensores", "/sensors"],
          ["⚡", "Energia", "/energy"],
          ["📡", "Comunicação", "/communication"],
          ["🚨", "Alertas", "/alerts"],
          ["⚙️", "Configurações", "/settings"],
        ].map(([icon, title, route]) => (
          <TouchableOpacity
            key={route}
            style={[
              styles.menuCard,
              theme === "solar" && {
                backgroundColor: "#FFF7ED",
                borderColor: "#F59E0B",
              },
            ]}
            onPress={() =>
              router.push(route as any)
            }
          >
            <Text style={styles.menuIcon}>
              {icon}
            </Text>

            <Text
              style={[
                styles.menuText,
                theme === "solar" && {
                  color: "#78350F",
                },
              ]}
            >
              {title}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={{ height: 30 }} />
      </ScrollView>
    </LinearGradient>
  );
}