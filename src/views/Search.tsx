import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Search.module.css';
import Header from '../common/Header/Header';
import Card from '../common/Card/Card';

function Search() {
    const { year }: any = useParams();
    const [beers, setBeers] = useState([] as any[]);

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?brewed_after=01-${year}&brewed_before=12-${year}&per_page=80`)
            .then((res) => res.json())
            .then((result) => {
                setBeers(result);
            });
    }, [year]);

    return (
        <div id="search">
            <Header headingText={`Beers brewed in ${year}`} subHeadingText="Select one to discover its recipe" />

            <div className={styles.grid}>
                {beers.map((beer) => (
                    <Card key={beer.id} linkOnly>
                        <Link to={'/beer/' + beer.id}>{beer.name}</Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Search;
