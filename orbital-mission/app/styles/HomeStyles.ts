import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

    borderWidth: 4,
    borderColor: "#6CB4FF",

    marginBottom: 22,

    shadowColor: "#6CB4FF",

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 1,

    shadowRadius: 35,

    elevation: 30,
  },

  mainTitle: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
  },

  subtitle: {
    color: "#93C5FD",
    fontSize: 15,
    marginTop: 8,
    letterSpacing: 3,
  },

  card: {
    backgroundColor:
      "rgba(15, 23, 42, 0.88)",

    marginHorizontal: 20,
    padding: 22,
    borderRadius: 20,
    marginBottom: 18,

    borderWidth: 1,

    borderColor:
      "rgba(96, 165, 250, 0.25)",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  cardTitle: {
    color: "#94A3B8",
    fontSize: 17,
  },

  value: {
    color: "#FFFFFF",
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
    backgroundColor:
      "rgba(15, 23, 42, 0.88)",

    marginHorizontal: 20,
    marginBottom: 14,

    padding: 18,

    borderRadius: 18,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#2563EB",
  },

  menuIcon: {
    fontSize: 28,
    marginRight: 15,
  },

  menuText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});