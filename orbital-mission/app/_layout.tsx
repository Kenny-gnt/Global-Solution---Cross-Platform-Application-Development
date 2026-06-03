import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { MissionProvider } from "../context/MissionContext";
import { ThemeProvider } from "../context/ThemeContext";

import "react-native-reanimated";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <MissionProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#0B0F1A",
            },

            headerTintColor: "#FFFFFF",

            contentStyle: {
              backgroundColor: "#0B0F1A",
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Mission Control",
            }}
          />

          <Stack.Screen
            name="sensors"
            options={{
              title: "Sensores",
            }}
          />

          <Stack.Screen
            name="energy"
            options={{
              title: "Energia",
            }}
          />

          <Stack.Screen
            name="communication"
            options={{
              title: "Comunicação",
            }}
          />

          <Stack.Screen
            name="alerts"
            options={{
              title: "Alertas",
            }}
          />

          <Stack.Screen
            name="settings"
            options={{
              title: "Configurações",
            }}
          />
        </Stack>

        <StatusBar style="light" />
      </MissionProvider>
    </ThemeProvider>
  );
}