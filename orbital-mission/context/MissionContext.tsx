import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { saveAlert } from "../storage/missionStorage";

type MissionData = {
  temperature: number;
  energy: number;
  signal: string;
  alert: string;
};

type MissionContextType = {
  data: MissionData;
  updateEnergy: (value: number) => void;
};

const MissionContext = createContext(
  {} as MissionContextType
);

export function MissionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<MissionData>({
    temperature: 32,
    energy: 92,
    signal: "Estável",
    alert: "Sistema operando normalmente",
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const newTemperature =
        Math.floor(Math.random() * 15) + 25;

      const newEnergy =
        Math.floor(Math.random() * 25) + 75;

      const tempLimit =
        Number(
          await AsyncStorage.getItem(
            "temperatureLimit"
          )
        ) || 45;

      const energyLimit =
        Number(
          await AsyncStorage.getItem(
            "energyLimit"
          )
        ) || 70;

      let newAlert =
        "Sistema operando normalmente";

      if (
        newTemperature > tempLimit &&
        newEnergy < energyLimit
      ) {
        newAlert =
          "🚨 Temperatura e energia em estado crítico";

      } else if (
        newTemperature > tempLimit
      ) {
        newAlert =
          "⚠️ Temperatura acima do limite seguro";

      } else if (
        newEnergy < energyLimit
      ) {
        newAlert =
          "🚨 Energia abaixo do limite seguro";

      } else {
        newAlert =
          "Sistema operando normalmente";
      }

      await saveAlert(newAlert);

      setData((prev) => ({
        ...prev,
        temperature: newTemperature,
        energy: newEnergy,
        alert: newAlert,
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function updateEnergy(value: number) {
    setData((prev) => ({
      ...prev,
      energy: value,
    }));
  }

  return (
    <MissionContext.Provider
      value={{
        data,
        updateEnergy,
      }}
    >
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(MissionContext);
}