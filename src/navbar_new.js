import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="ui three item menu">
          <a className="active item">Editorials</a>
          <a className="item">Reviews</a>
          <a className="item">Upcoming Events</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
