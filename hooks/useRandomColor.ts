import { useState } from "react";

const useRandomColor = () => {
  const [color, setColor] = useState<string>("#FFFFFF"); // Initial color
  const [previousColor, setPreviousColor] = useState<string>("#FFFFFF"); // Initial previous color
  const [tapCount, setTapCount] = useState<number>(0);

  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setPreviousColor(color); // Save the current color as the previous color before updating
    setColor(randomColor); // Update the color
    setTapCount(tapCount + 1); // Increment tap count
  };

  const resetToPreviousColor = () => {
    setColor(previousColor); // Revert to the previous color
  };

  return {
    color,
    previousColor,
    tapCount,
    generateRandomColor,
    resetToPreviousColor,
  };
};

export default useRandomColor;
