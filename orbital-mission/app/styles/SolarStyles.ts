import { StyleSheet } from "react-native";

export const solarStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  hero: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  heroImage: {
    width: 220,
    height: 220,
    borderRadius: 999,

    borderWidth: 5,
    borderColor: "#F59E0B",

    marginBottom: 22,

    shadowColor: "#F59E0B",

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 1,
    shadowRadius: 35,
    elevation: 30,
  },

  mainTitle: {
    color: "#7C2D12",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
  },

  subtitle: {
    color: "#B45309",
    fontSize: 15,
    marginTop: 8,
    letterSpacing: 3,
  },

  card: {
    backgroundColor: "rgba(255,255,255,0.75)",

    marginHorizontal: 20,
    padding: 22,
    borderRadius: 20,
    marginBottom: 18,

    borderWidth: 1,
    borderColor: "#F59E0B",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  cardTitle: {
    color: "#92400E",
    fontSize: 17,
  },

  value: {
    color: "#7C2D12",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
  },

  alertCard: {
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
  },

  alertTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  alertText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 8,
  },

  menuCard: {
    backgroundColor: "rgba(255,255,255,0.75)",

    marginHorizontal: 20,
    marginBottom: 14,

    padding: 18,

    borderRadius: 18,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#F59E0B",
  },

  menuIcon: {
    fontSize: 28,
    marginRight: 15,
  },

  menuText: {
    color: "#7C2D12",
    fontSize: 18,
    fontWeight: "600",
  },
});