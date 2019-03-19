/** @format */

import React from "react";

import { TodoContext } from "@containers/TodoList";

export default function withTodoContext(Component) {
  return function WrapperComponent(props) {
    return (
      <TodoContext.Consumer>
        {(state) => <Component {...props} context={state} />}
      </TodoContext.Consumer>
    );
  };
}
