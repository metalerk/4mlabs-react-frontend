import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About.js'
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => <App color="black" />} />
                <Route exact path="/about" render={() => <About />} />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<RouterComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
