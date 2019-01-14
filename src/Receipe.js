import React, { Component } from "react";

class Receipe extends Component {
  render() {
    const { title, price } = this.props;
    const ing = this.props.ing.map((ing, index) => <li key={index}>{ing}</li>);
    return (
      <div>
        this is Receipe Component
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
