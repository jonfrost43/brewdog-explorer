import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Header from '../common/Header/Header';
import Card from '../common/Card/Card';

const YEARS = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];

function Home() {
    return (
        <div>
            <Header headingText="Welcome" subHeadingText="Select a year" />

            <div className={styles.grid}>
                {YEARS.map((year) => (
                    <Card key={year} linkOnly>
                        <Link to={'/search/' + year}>{year}</Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;
