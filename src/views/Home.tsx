import { useState, useEffect } from 'react';
import styles from './Home.module.css';

function Home() {
    const [beers, setBeers] = useState([] as any[]);
    const [year, setYear] = useState('2007');
    const [fetchParam, setYearParam] = useState(year);

    useEffect(() => {
        fetch(
            `https://api.punkapi.com/v2/beers?brewed_after=01-${fetchParam}&brewed_before=12-${fetchParam}&per_page=80`
        )
            .then((res) => res.json())
            .then((result) => {
                setBeers(result);
            });
    }, [fetchParam]);

    return (
        <div>
            <div className={styles.controls}>
                <label htmlFor="year">Year</label>
                <input
                    type="number"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    min="2007"
                    max="2016"
                />
                <button
                    disabled={year === fetchParam}
                    onClick={() => setYearParam(year)}
                >
                    Search
                </button>
            </div>

            <div className={styles.grid}>
                {beers.map((beer) => (
                    <p key={beer.id} className={styles.item}>
                        {beer.name}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Home;
