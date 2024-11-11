import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useRandomColor from "../hooks/useRandomColor";
import HelloMessage from "../src/components/HelloMessage";
import ColorHistory from "../src/components/ColorHistory";

const HomeScreen = () => {
  const { color, tapCount, generateRandomColor, resetToPreviousColor } =
    useRandomColor();

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <HelloMessage />
      <Text style={styles.tapCounter}>Tap Count: {tapCount}</Text>

      <TouchableOpacity style={styles.button} onPress={generateRandomColor}>
        <Text style={styles.buttonText}>Change Color</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={resetToPreviousColor}>
        <Text style={styles.buttonText}>Previous Color</Text>
      </TouchableOpacity>

      <ColorHistory color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tapCounter: {
    fontSize: 18,
    marginBottom: 20,
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#333333",
    padding: 10,
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default HomeScreen;
