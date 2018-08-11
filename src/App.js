import React, { Component } from 'react';
import Home from './containers/Home'

import { connect } from 'react-redux';
import { APP_LOAD } from './constants/actionTypes';

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Home appName={this.props.appName} />
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    appName: state.common.appName,
    appLoaded: state.common.appLoaded
  }
}

function mapDispatchToProps(dispatch){
  return {
    onLoad: payload => dispatch({ type: APP_LOAD, payload })
  };
  }

export default connect(mapStateToProps,mapDispatchToProps)(App);
