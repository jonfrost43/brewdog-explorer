import { useParams } from 'react-router-dom';
import { useGetBeerByIdQuery } from '../services/punkApi';
import styles from './Beer.module.css';
import Header from '../common/Header/Header';
import Card from '../common/Card/Card';
import Chart from 'react-apexcharts';

function Beer() {
    const { id }: any = useParams();
    const { data, isError, isSuccess } = useGetBeerByIdQuery(id);

    return (
        <div>
            <Header headingText={data?.name} subHeadingText={data?.tagline} />

            {isError && <p>An error occured</p>}

            {isSuccess && (
                <div className={styles.grid}>
                    <Card className={styles.abv}>
                        <h3>{data.abv}%</h3>
                    </Card>
                    <Card className={styles.desc}>
                        <p>{data.description}</p>
                    </Card>
                    <Card className={styles.hops}>
                        <h3>Hop profile</h3>
                        <Chart
                            type="bar"
                            series={[...new Set(data.ingredients.hops.map((hop: any) => hop.add))].map((stage: any) => {
                                return {
                                    name: stage,
                                    data: data.chartableHops.map((hop: any) => hop[stage] || 0),
                                };
                            })}
                            options={{
                                chart: {
                                    stacked: true,
                                    background: 'transparent',
                                    toolbar: {
                                        show: false,
                                    },
                                },
                                theme: {
                                    mode: 'dark',
                                },
                                xaxis: {
                                    categories: [...new Set(data.ingredients.hops.map((hop: any) => hop.name))],
                                },
                                plotOptions: {
                                    bar: {
                                        horizontal: true,
                                    },
                                },
                                grid: {
                                    show: false,
                                },
                            }}
                        />
                    </Card>
                    <Card className={styles.malt}>
                        <h3>Malt profile</h3>
                        <Chart
                            type="donut"
                            series={data.ingredients.malt.map((malt: any) => malt.amount.value)}
                            options={{
                                chart: {
                                    background: 'transparent',
                                },
                                theme: {
                                    mode: 'dark',
                                },
                                labels: data.ingredients.malt.map((malt: any) => malt.name),
                                dataLabels: {
                                    enabled: false,
                                },
                            }}
                        />
                    </Card>
                </div>
            )}
        </div>
    );
}

export default Beer;
