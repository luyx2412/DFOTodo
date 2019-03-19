/** @format */

import React from "react";
import { Button } from "react-native-elements";

export default React.memo(({ title, onPress }) => {
  return (
    <Button
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      title={title}
      onPress={onPress}
    />
  );
});

const styles = {
  titleStyle: {
    fontSize: 14
  },
  buttonStyle: {
    borderRadius: 40,
    paddingVertical: 5,
    paddingHorizontal: 10
  }
};
