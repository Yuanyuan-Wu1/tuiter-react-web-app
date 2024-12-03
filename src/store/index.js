import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        // 所有 reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            // 添加中间件
        ]),
});

setupListeners(store.dispatch); 