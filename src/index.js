import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './components/Info.js'
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const RouterComponent = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => <App />} />
                <Route exact path="/info" render={() => <Info />} />
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<RouterComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
