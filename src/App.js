import React, { Fragment } from 'react';
import './App.css';

import GuessInfo from './helpers/GuessInfo.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
    GuessInfo();
  }
  render() { 
    return (
      <Fragment>
        <h1>Hello World!</h1>
      </Fragment>
    );
  }
}
 
export default App;