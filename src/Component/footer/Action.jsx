import React, { useContext } from "react";
import Button from "../../features/buttons/button";

const Action = () => {
  return (
    <div className="action">
      <h3>Quick actions</h3>
      <Button>Mark all todo complete</Button>
      <Button>Delete all todo completed</Button>
    </div>
  );
};

export default Action;
