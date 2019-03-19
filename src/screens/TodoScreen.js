/** @format */

import React from "react";
import { View, SafeAreaView } from "react-native";

import { TodoList } from "@containers";

export default function TodoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <TodoList />
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1
  },
  view: {
    flex: 1,
    padding: 30
  }
};
