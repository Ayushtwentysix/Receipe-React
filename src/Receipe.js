import React, { Component } from "react";

class Receipe extends Component {
  render() {
    const { title, price, time, type } = this.props;
    const ing = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));
    return (
      <div>
        <div>
          {title} -- {price}
        </div>
        ingredients:
        {ing}
      </div>
    );
  }
}

export default Receipe;
