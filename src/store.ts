import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { punkApi } from './services/punkApi';

export const store = configureStore({
    reducer: {
        [punkApi.reducerPath]: punkApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(punkApi.middleware),
});

setupListeners(store.dispatch);
