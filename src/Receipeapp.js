import React, { Component } from "react";
import ReceipeList from "./ReceipeList";
class ReceipeApp extends Component {
  render() {
    return (
      <div>
        {/*this.props.oneReceipe.map((r, index) => (
          <Receipe key={index} title={r.title} time={r.time} type={r.type} />
        ))*/}
        <ReceipeList />
      </div>
    );
  }
}

export default ReceipeApp;
