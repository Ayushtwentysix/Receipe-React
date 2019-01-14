import React, { Component } from "react";
import Receipe from "./Receipe";

class ReceipeApp extends Component {
  render() {
    return (
      <div>
        <Receipe
          title="boiled eggs"
          price="12"
          ing={["eggs", "salt", "ketchup"]}
        />
      </div>
    );
  }
}

export default ReceipeApp;
