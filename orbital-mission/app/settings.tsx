import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  const [temperatureLimit, setTemperatureLimit] =
    useState("");

  const [energyLimit, setEnergyLimit] =
    useState("");

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const savedTemp =
        await AsyncStorage.getItem(
          "temperatureLimit"
        );

      const savedEnergy =
        await AsyncStorage.getItem(
          "energyLimit"
        );

      if (savedTemp) {
        setTemperatureLimit(savedTemp);
      }

      if (savedEnergy) {
        setEnergyLimit(savedEnergy);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveSettings = async () => {
    if (!temperatureLimit || !energyLimit) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos."
      );
      return;
    }

    try {
      await AsyncStorage.setItem(
        "temperatureLimit",
        temperatureLimit
      );

      await AsyncStorage.setItem(
        "energyLimit",
        energyLimit
      );

      Alert.alert(
        "Sucesso",
        "Configurações salvas!"
      );
    } catch (error) {
      Alert.alert(
        "Erro",
        "Falha ao salvar configurações."
      );
    }
  };

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
        ⚙️ Configurações da Missão
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
          Limite de Temperatura (°C)
        </Text>

        <TextInput
          style={[
            styles.input,
            theme === "solar" && {
              backgroundColor: "#FEF3C7",
              color: "#78350F",
            },
          ]}
          value={temperatureLimit}
          onChangeText={setTemperatureLimit}
          keyboardType="numeric"
          placeholder="Ex: 40"
          placeholderTextColor="#92400E"
        />
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
          Limite de Energia (%)
        </Text>

        <TextInput
          style={[
            styles.input,
            theme === "solar" && {
              backgroundColor: "#FEF3C7",
              color: "#78350F",
            },
          ]}
          value={energyLimit}
          onChangeText={setEnergyLimit}
          keyboardType="numeric"
          placeholder="Ex: 20"
          placeholderTextColor="#92400E"
        />
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          theme === "solar" && {
            backgroundColor: "#F59E0B",
          },
        ]}
        onPress={saveSettings}
      >
        <Text style={styles.buttonText}>
          Salvar Configurações
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              theme === "space"
                ? "#F59E0B"
                : "#2563EB",
          },
        ]}
        onPress={() =>
          setTheme(
            theme === "space"
              ? "solar"
              : "space"
          )
        }
      >
        <Text style={styles.buttonText}>
          {theme === "space"
            ? "☀️ Ativar Modo Solar"
            : "🌙 Ativar Modo Espacial"}
        </Text>
      </TouchableOpacity>
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#2563EB",
  },

  label: {
    color: "#93C5FD",
    marginBottom: 10,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 18,
    borderRadius: 16,
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});