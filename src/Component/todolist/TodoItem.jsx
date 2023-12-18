import React, { useContext } from "react";
import Button from "../../features/buttons/button";

const TodoItem = () => {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <span className="content">hello</span>

      <div className="todo-action">
        <div className="color-picker">Pick color</div>

        <Button>delete</Button>
      </div>
    </div>
  );
};

export default TodoItem;
