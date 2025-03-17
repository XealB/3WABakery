import { configureStore } from '@reduxjs/toolkit'
import { gameSlice } from './slice/gameSlice'

const store = configureStore({
    reducer:{
        [gameSlice.reducerPath]:gameSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {return getDefaultMiddleware().concat([
        gameSlice.middleware
    ])}
})

export default store
