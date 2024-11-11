# Color Change App

This is a simple React Native app built with Expo that displays a message and allows users to change the background color by tapping the screen. The app also keeps a tap count and includes a "Previous Color" button to revert to the last color. This project follows best practices and demonstrates custom hook usage in React Native with TypeScript.

## Features

- **Tap to Change Color**: Tap anywhere on the screen to change the background to a randomly generated color.
- **Tap Counter**: Tracks the number of taps made by the user.
- **Previous Color**: A button to revert to the previous background color.
- **Custom Components**: The project is modular, with reusable components and custom hooks.

## Project Structure

The project is organized as follows:

```plaintext
ColorChangeApp/
├── components/
│   ├── ColorHistory.tsx          # Displays the current color hex code
│   └── HelloMessage.tsx          # Displays a welcome message
├── hooks/
│   └── useRandomColor.ts         # Custom hook to manage color changes and state
├── screens/
│   └── HomeScreen.tsx            # Main screen of the app
├── App.tsx                       # Entry point of the app
└── README.md                     # Project documentation
```
