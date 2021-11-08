import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './views/Home';
import Search from './views/Search';
import Beer from './views/Beer';
import styles from './App.module.css';

function App() {
    return (
        <Provider store={store}>
            <div className={styles.app}>
                <BrowserRouter>
                    <header className={styles.header}>
                        <h1>
                            <Link to="/">brewdog-explorer</Link>
                        </h1>
                    </header>
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
        </Provider>
    );
}

export default App;
