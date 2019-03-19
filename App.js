/** @format */

import React from "react";
import { ThemeProvider } from "react-native-elements";

import { TodoScreen } from "@screens";

export default function App() {
  return (
    <ThemeProvider>
      <TodoScreen />
    </ThemeProvider>
  );
}
