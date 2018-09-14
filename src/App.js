import React, { Component } from 'react';
import PropTypes from 'prop-types';

//class App extends Component {
//  render() {
//    const greeting = "Hi, Tom!";
//    const dom = <h1>{greeting}</h1>;
//    //return dom;
//    return <input type="text" onClick={() => {console.log("I am clicked!")}} />;
//
//  }
//}


const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName", age: 3 }
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
