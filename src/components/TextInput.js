/** @format */

import React, { useState } from "react";
import { TextInput } from "react-native";

function useValue(initialValue, onSubmit) {
  const [value, setValue] = useState(initialValue);

  const setSubmit = () => {
    // clear textinput
    setValue("");
    onSubmit(value);
  };

  return [value, setValue, setSubmit];
}

export default React.memo(({ onSubmit, placeholder, autoFocus }) => {
  const [value, setValue, setSubmit] = useValue("", onSubmit);

  return (
    <TextInput
      autoFocus={autoFocus}
      style={styles.container}
      onChangeText={setValue}
      onSubmitEditing={setSubmit}
      value={value}
      placeholder={placeholder}
    />
  );
});

const styles = {
  container: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 3
  }
};
