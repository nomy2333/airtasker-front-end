import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import './firebase';


import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />

        </BrowserRouter>

    )
}



ReactDOM.render(<App />, document.getElementById('root'));

