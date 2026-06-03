import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeType = "space" | "solar";

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (
    theme: ThemeType
  ) => void;
};

const ThemeContext =
  createContext({} as ThemeContextType);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] =
    useState<ThemeType>("space");

  useEffect(() => {
    loadTheme();
  }, []);

  async function loadTheme() {
    const savedTheme =
      await AsyncStorage.getItem("theme");

    if (
      savedTheme === "space" ||
      savedTheme === "solar"
    ) {
      setThemeState(savedTheme);
    }
  }

  async function setTheme(
    newTheme: ThemeType
  ) {
    setThemeState(newTheme);

    await AsyncStorage.setItem(
      "theme",
      newTheme
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}