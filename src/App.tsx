import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>brewdog-explorer</h1>
            </header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/beer">
                        <h2>beer detail</h2>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
