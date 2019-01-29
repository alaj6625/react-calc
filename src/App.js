import React, { Component } from 'react';
import "./App.css";
import Button from "./components/Button";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (<div className="app">
      <div className="calc-wrapper">
      <div className="row">
        </div>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>0</Button>
      </div>
    </div>
    );
  }
}
 
export default  App;