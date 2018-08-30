import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = "Hi, Tom!";
    const dom = <h1>{greeting}</h1>;
    //return dom;
    return <input type="text" onClick={() => {console.log("I am clicked!")}} />;

  }
}

export default App;
