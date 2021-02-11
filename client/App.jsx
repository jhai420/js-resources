import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import MainContainer from './containers/MainContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faPlus, faTimesCircle, faPlusCircle)

class App extends Component {
  render() {
    return(
      <>
        <div className="App">
          <MainContainer/>
        </div>
      </>
    )
  }
}

export default App;