import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import Beer from './views/Beer';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h1>brewdog-explorer</h1>
            </header>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/search/:year">
                        <Search />
                    </Route>
                    <Route path="/beer/:id">
                        <Beer />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
