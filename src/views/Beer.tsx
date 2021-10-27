import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Beer.module.css';
import Card from '../common/Card/Card';

function Beer() {
    const { id }: any = useParams();

    const [beer, setBeer] = useState({} as any);

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setBeer(result[0]);
            });
    }, [id]);

    return (
        <div>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>

            <div className={styles.grid}>
                <Card>
                    <h3>{beer.abv}%</h3>
                </Card>
                <Card>
                    <p>{beer.description}</p>
                </Card>
            </div>
        </div>
    );
}

export default Beer;
