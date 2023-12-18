import React, { useContext, useState } from "react";
import "./Form.css";

const Form = () => {
  return (
    <form>
      <input
        className="input-todo"
        type="text"
        placeholder="What do you want to do?"
      />
    </form>
  );
};

export default Form;
