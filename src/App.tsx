import React from 'react';
import { BrowserRouter as Router, Route, matchPath } from 'react-router-dom';
import AppHeader from './common/AppHeader/AppHeader';
import Home from './views/Home';
import Search from './views/Search';
import Beer from './views/Beer';
import styles from './App.module.css';
import { CSSTransition } from 'react-transition-group';

const routes = [
    { path: '/', Component: Home, exact: true },
    { path: '/search/:yearBrewed', Component: Search },
    { path: '/beer/:beerId', Component: Beer },
];

function getEnterClassName(location: any) {
    const fromIndex: number = routes.findIndex((r) => matchPath(location.state?.from, r));
    const toIndex: number = routes.findIndex((r) => matchPath(location.pathname, r));

    if (fromIndex > toIndex) {
        return styles.enterLeft;
    }

    return styles.enterRight;
}

function getExitClassName(location: any) {
    const fromIndex: number = routes.findIndex((r) => matchPath(location.state?.from, r));
    const toIndex: number = routes.findIndex((r) => matchPath(location.pathname, r));

    if (fromIndex < toIndex) {
        return styles.exitActiveLeft;
    }

    return styles.exitActiveRight;
}

function App() {
    return (
        <div className={styles.app}>
            <Router>
                <AppHeader />

                {routes.map(({ path, Component }, index) => (
                    <Route key={path} exact path={path}>
                        {({ match, location }) => {
                            console.log(match, location.state);

                            return (
                                <CSSTransition
                                    in={match != null}
                                    timeout={400}
                                    classNames={{
                                        ...styles,
                                        enter: getEnterClassName(location),
                                        exitActive: getExitClassName(location),
                                    }}
                                    unmountOnExit
                                >
                                    <Component />
                                </CSSTransition>
                            );
                        }}
                    </Route>
                ))}
            </Router>
        </div>
    );
}

export default App;
