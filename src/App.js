import React from 'react';

import Grid from '@material-ui/core/Grid';

import Header from './components/Header'
import GuessInfo from './helpers/GuessInfo'
import Menu from './components/Menu'

import './styles/App.css'
import './styles/header.css'

let classes = {
  image: {
      display: "block",
      "margin-top": "5%",
      "margin-left": "auto",
      "margin-right": "auto",
      "margin-bottom": "10%",
  },
  menu: {
    "margin-top": "5%",
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-bottom": "10%",
    width: "90%",
  },
  root: {
      flexGrow: 1,
    },
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
    GuessInfo();
  }
  render() { 
    return (
    <div>
      <Grid container className={classes.root} spacing={10}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={6}
              direction="row" justify="center" alignItems="center">
            <img className="profile-photo" src="/luis.jpg" alt='profile_photo' style={classes.image} />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={6} xl={6}
              direction="row" justify="center" alignItems="center">
            <Menu style={classes.menu} />
          </Grid>
      </Grid>
    </div>
    );
  }
}
 
export default App;