import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveAlert(alert: string) {
  await AsyncStorage.setItem(
    "@mission_alert",
    alert
  );
}

export async function getAlert() {
  const alert = await AsyncStorage.getItem(
    "@mission_alert"
  );

  return alert;
}