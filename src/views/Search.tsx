import { Link, useParams } from 'react-router-dom';
import { useGetBeersByYearQuery } from '../services/punkApi';
import styles from './Search.module.css';
import Header from '../common/Header/Header';
import Card from '../common/Card/Card';

function Search() {
    const { year }: any = useParams();
    const { data, error, isSuccess } = useGetBeersByYearQuery(year);

    return (
        <div id="search">
            <Header headingText={`Beers brewed in ${year}`} subHeadingText="Select one to discover its recipe" />

            {error && <p>An error occured</p>}

            <div className={styles.grid}>
                {isSuccess &&
                    data.map((beer: any) => (
                        <Card key={beer.id} linkOnly>
                            <Link to={'/beer/' + beer.id}>{beer.name}</Link>
                        </Card>
                    ))}
            </div>
        </div>
    );
}

export default Search;
