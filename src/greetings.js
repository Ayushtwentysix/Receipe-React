// import React, { Component } from "react";

// class Greetings extends Component {
//   render() {
//     const name = this.props.name;

//     return (
//       <div>
//         <h1>hello, {name}</h1>
//       </div>
//     );
//   }
// }

import React from "react";

const Greetings = props => {
  return (
    <div>
      <h1>Good morning, {props.name}</h1>
    </div>
  );
};

export default Greetings;
