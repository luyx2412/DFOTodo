/** @format */

import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { CheckBox, Icon } from "react-native-elements";

import { withTodoContext } from "@libs";

const { width } = Dimensions.get("window");

const TodoItem = React.memo(
  ({ item, index, context: { updateItem, deleteItem } }) => {
    return (
      <View style={styles.todo}>
        <TouchableOpacity
          style={styles.todoLeft}
          onPress={() => updateItem(index)}>
          <CheckBox containerStyle={styles.checkbox} checked={item.checked} />
          <View style={styles.textContainer}>
            <Text style={[styles.text, item.checked && styles.textChecked]}>
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
        <Icon
          name="delete"
          type="antdesign"
          color="red"
          size={20}
          onPress={() => deleteItem(index)}
        />
      </View>
    );
  }
);

const styles = {
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  todoLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkbox: {
    marginLeft: 0,
    paddingLeft: 0
  },
  textContainer: {
    maxWidth: width / 1.8
  },
  text: {
    color: "#111"
  },
  textChecked: {
    color: "#aaa"
  }
};

export default withTodoContext(TodoItem);
