import React, { Component } from "react";
import ReceipeApp from "./Receipeapp";
import Navbar from "./navbar_new";
import Greetings from "./greetings";

class App extends Component {
  render() {
    return (
      <div>
        <Greetings name="ayush" />
        <Navbar />
        <ReceipeApp />
      </div>
    );
  }
}

export default App;
