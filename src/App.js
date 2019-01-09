import React from 'react';
import './styles/App.css'
import Header from './components/Header'
import GuessInfo from './helpers/GuessInfo'
import Menu from './components/Menu'
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
    GuessInfo();
  }
  render() { 
    return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
    );
  }
}
 
export default App;