/** @format */

import React from "react";
import { ScrollView } from "react-native";

import { withTodoContext } from "@libs";

import TodoItem from "./TodoItem";

const TodoItems = React.memo(({ context: { list, filterIndex } }) => {
  if (!list || (list && !list.length)) return null;

  const getList = () => {
    switch (filterIndex) {
      case 1: // done
        return list.filter((o) => o.checked);

      case 2: // active
        return list.filter((o) => !o.checked);

      default:
        // all
        return list;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {getList().map((o, i) => {
        return <TodoItem key={i.toString()} index={i} item={o} />;
      })}
    </ScrollView>
  );
});

const styles = {
  container: {}
};

export default withTodoContext(TodoItems);
