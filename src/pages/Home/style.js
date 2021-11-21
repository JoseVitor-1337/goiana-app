import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barCode: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    backgroundColor: "tomato",
    borderRadius: 30,
  },
  barCodeText: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default styles;
