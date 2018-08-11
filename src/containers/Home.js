import React, { Component } from 'react';


class Home extends Component {
  render(){
    return (
          <div>
          <h1 className="App-title">Welcome to {this.props.appName}</h1>
          <p><code>You can set the application name in common reducer [./reducers/common.js]</code></p>
          </div>
    );
  }
}

export default Home;
