import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const punkApi = createApi({
    reducerPath: 'punkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.punkapi.com/v2/',
    }),
    endpoints: (builder) => ({
        getBeersByYear: builder.query({
            query: (year) => `beers?brewed_after=01-${year}&brewed_before=12-${year}&per_page=80`,
        }),
        getBeerById: builder.query({
            query: (id) => `beers/${id}`,
            transformResponse: (response: any) => response[0],
        }),
    }),
});

export const { useGetBeersByYearQuery, useGetBeerByIdQuery } = punkApi;
