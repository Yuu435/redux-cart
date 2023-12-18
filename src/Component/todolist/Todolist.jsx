import React, { useContext } from "react";
import "./Todolist.css";
import TodoItem from "./TodoItem";

const Todolist = () => {
  return (
    <div className="todo-list">
      <TodoItem />
    </div>
  );
};

export default Todolist;
