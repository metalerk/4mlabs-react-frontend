import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About.js'
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer';

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={(props) => <App {...props} silent={false} />} />
                <Route exact path="/silent" render={(props) => <App {...props} silent={true} />} />
                <Route exact path="/about" component={About} />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<RouterComponent />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
