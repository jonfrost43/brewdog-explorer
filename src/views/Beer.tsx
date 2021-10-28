import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Beer.module.css';
import Card from '../common/Card/Card';
import Chart from 'react-apexcharts';

function Beer() {
    const { id }: any = useParams();

    const [beer, setBeer] = useState({
        ingredients: {
            malt: [],
            hops: [],
        },
    } as any);

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then((res) => res.json())
            .then((result) => {
                result[0].chartableHops = result[0].ingredients.hops.reduce(
                    (hops: any, hop: any) => {
                        const existingHop = hops.find(
                            (h: any) => h.name === hop.name
                        );
                        if (!existingHop) {
                            hop[hop.add] = hop.amount.value;
                            hops.push(hop);
                        } else {
                            existingHop[hop.add] = hop.amount.value;
                        }
                        return hops;
                    },
                    []
                );

                setBeer(result[0]);
            });
    }, [id]);

    return (
        <div>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>

            <div className={styles.grid}>
                <Card className={styles.abv}>
                    <h3>{beer.abv}%</h3>
                </Card>
                <Card className={styles.desc}>
                    <p>{beer.description}</p>
                </Card>
                <Card className={styles.hops}>
                    <h3>Hop profile</h3>
                    <Chart
                        type="bar"
                        series={[
                            ...new Set(
                                beer.ingredients.hops.map((hop: any) => hop.add)
                            ),
                        ].map((stage: any) => {
                            return {
                                name: stage,
                                data: beer.chartableHops.map(
                                    (hop: any) => hop[stage] || 0
                                ),
                            };
                        })}
                        options={{
                            chart: {
                                stacked: true,
                                background: 'transparent',
                            },
                            theme: {
                                mode: 'dark',
                            },
                            xaxis: {
                                categories: [
                                    ...new Set(
                                        beer.ingredients.hops.map(
                                            (hop: any) => hop.name
                                        )
                                    ),
                                ],
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
                        series={beer.ingredients.malt.map(
                            (malt: any) => malt.amount.value
                        )}
                        options={{
                            chart: {
                                background: 'transparent',
                            },
                            theme: {
                                mode: 'dark',
                            },
                            labels: beer.ingredients.malt.map(
                                (malt: any) => malt.name
                            ),
                            dataLabels: {
                                enabled: false,
                            },
                        }}
                    />
                </Card>
            </div>
        </div>
    );
}

export default Beer;
