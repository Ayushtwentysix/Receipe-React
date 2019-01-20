import React, { Component } from "react";
import Receipe from "./Receipe";

class ReceipeList extends Component {
  static defaultProps = {
    receipes: [
      {
        title: "Spaghetti",
        instructions:
          "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"]
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"]
      },
      {
        title: "Avocado Toast",
        instructions:
          "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: [
          "2 slices of bread",
          "1 avocado",
          "1 tablespoon olive oil",
          "1 pinch of salt",
          "pepper"
        ]
      }
    ]
  };

  render() {
    const OneReceipeAtATime = this.props.receipes.map((r, index) => (
      <Receipe key={index} {...r} />
    ));

    return <div>{OneReceipeAtATime}</div>;
  }
}

export default ReceipeList;
