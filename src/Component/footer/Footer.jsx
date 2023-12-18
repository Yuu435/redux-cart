import React, { useContext } from "react";
import Action from "./Action";
import Filter from "./Filter";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Action />

      <div className="remaining">
        <h3>Remaining</h3>
        <div className="remaining-content">0 remaining todos</div>
      </div>

      <Filter />
    </div>
  );
};

export default Footer;
