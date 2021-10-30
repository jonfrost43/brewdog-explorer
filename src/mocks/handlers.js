import { rest } from 'msw';

export const handlers = [
    rest.get('https://api.punkapi.com/v2/beers', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    id: 1,
                    name: 'Buzz',
                },
            ])
        );
    }),

    rest.get('https://api.punkapi.com/v2/beers/1', (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    id: 1,
                    name: 'Buzz',
                    abv: 4.5,
                    ingredients: {
                        malt: [
                            {
                                name: 'Maris Otter Extra Pale',
                                amount: {
                                    value: 3.3,
                                    unit: 'kilograms',
                                },
                            },
                            {
                                name: 'Caramalt',
                                amount: {
                                    value: 0.2,
                                    unit: 'kilograms',
                                },
                            },
                            {
                                name: 'Munich',
                                amount: {
                                    value: 0.4,
                                    unit: 'kilograms',
                                },
                            },
                        ],
                        hops: [
                            {
                                name: 'Fuggles',
                                amount: {
                                    value: 25,
                                    unit: 'grams',
                                },
                                add: 'start',
                                attribute: 'bitter',
                            },
                            {
                                name: 'First Gold',
                                amount: {
                                    value: 25,
                                    unit: 'grams',
                                },
                                add: 'start',
                                attribute: 'bitter',
                            },
                            {
                                name: 'Fuggles',
                                amount: {
                                    value: 37.5,
                                    unit: 'grams',
                                },
                                add: 'middle',
                                attribute: 'flavour',
                            },
                            {
                                name: 'First Gold',
                                amount: {
                                    value: 37.5,
                                    unit: 'grams',
                                },
                                add: 'middle',
                                attribute: 'flavour',
                            },
                            {
                                name: 'Cascade',
                                amount: {
                                    value: 37.5,
                                    unit: 'grams',
                                },
                                add: 'end',
                                attribute: 'flavour',
                            },
                        ],
                    },
                },
            ])
        );
    }),
];
