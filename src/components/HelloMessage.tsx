import { Text, StyleSheet } from "react-native";

const HelloMessage = () => {
  return <Text style={styles.message}>Hello there!</Text>;
};

const styles = StyleSheet.create({
  message: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFFFFF",
  },
});

export default HelloMessage;
