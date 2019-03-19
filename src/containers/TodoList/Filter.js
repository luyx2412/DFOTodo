/** @format */

import React from "react";
import { ButtonGroup } from "react-native-elements";

import { withTodoContext } from "@libs";

const Filter = React.memo(
  ({ context: { filterButtons, filterIndex, setFilterIndex } }) => {
    const updateFilter = (i) => {
      setFilterIndex(i);
    };

    return (
      <ButtonGroup
        containerStyle={styles.containerStyle}
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
        onPress={updateFilter}
        selectedIndex={filterIndex}
        buttons={filterButtons}
      />
    );
  }
);

const styles = {
  containerStyle: {
    height: 30
  },
  buttonStyle: {
    padding: 5
  },
  textStyle: {
    fontSize: 14
  }
};

export default withTodoContext(Filter);
