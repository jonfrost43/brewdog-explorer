import { Link, useLocation } from 'react-router-dom';
import styles from './AppHeader.module.css';

function AppHeader() {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <h1>
                <Link to={{ pathname: '/', state: { from: location.pathname } }}>brewdog-explorer</Link>
            </h1>
        </header>
    );
}

export default AppHeader;
