import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#333",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 5,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  details: {
    fontSize: 14,
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },

});
