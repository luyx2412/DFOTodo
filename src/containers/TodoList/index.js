/** @format */

import React, { useState } from "react";
import { View, Text } from "react-native";

import { TextInput, Button } from "@components";

import TodoItems from "./TodoItems";
import Filter from "./Filter";

export const TodoContext = React.createContext("todo");

const filterButtons = ["All", "Done", "Active"];

function useList() {
  const [list, setList] = useState([]);
  // set default toggle will select all
  const [toggle, setToggle] = useState(true);

  // add new value to list
  const updateList = (value) => {
    setList([...list, { text: value }]);
  };

  // update status
  const updateItem = (index) => {
    setList(
      list.map((o, i) => {
        if (i === index) {
          return { ...o, checked: !o.checked };
        }
        return o;
      })
    );
  };

  // delete todo item
  const deleteItem = (index) => {
    setList(list.filter((o, i) => i !== index));
  };

  // select all
  const toggleAll = () => {
    // react hooks do not merge update
    setToggle(!toggle);
    setList(
      list.map((o) => {
        return { ...o, checked: toggle ? o.checked || !o.checked : false };
      })
    );
  };

  return [list, updateList, updateItem, deleteItem, toggleAll];
}

export default function TodoList() {
  const [list, updateList, updateItem, deleteItem, toggleAll] = useList([]);
  const [filterIndex, setFilterIndex] = useState(0);

  return (
    <TodoContext.Provider
      value={{
        list,
        deleteItem,
        updateItem,
        toggleAll,
        filterIndex,
        filterButtons,
        setFilterIndex
      }}>
      <View style={styles.header}>
        <Text style={styles.title}>Todo App</Text>
        <Button title="Toggle All" onPress={toggleAll} />
      </View>

      <View style={styles.filterContainer}>
        <Filter />
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            autoFocus
            onSubmit={updateList}
            placeholder="Please enter todo name"
          />
        </View>
        <TodoItems />
      </View>
    </TodoContext.Provider>
  );
}

const styles = {
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  inputContainer: {
    marginBottom: 20
  },
  filterContainer: {
    marginBottom: 5
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10
  }
};
