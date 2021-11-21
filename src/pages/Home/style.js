import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  deniedBox: {
    padding: 10,
  },
  deniedText: {
    fontSize: 20,
  },
  deniedButton: {
    marginTop: 15,
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
  },
  deniedButtonText: {
    fontSize: 20,
    color: "#FFF",
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
