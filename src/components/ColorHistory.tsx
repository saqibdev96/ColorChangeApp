import { View, Text, StyleSheet } from "react-native";

interface ColorHistoryProps {
  color: string;
}

const ColorHistory: React.FC<ColorHistoryProps> = ({ color }) => {
  return (
    <View style={styles.historyContainer}>
      <Text style={styles.historyText}>Current Color: {color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  historyText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default ColorHistory;
