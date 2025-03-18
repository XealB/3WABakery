import { configureStore } from '@reduxjs/toolkit'
import { gameSlice } from './slice/gameSlice'
import diceSlice from './slice/diceSlice'

const store = configureStore({
    reducer:{
        [gameSlice.reducerPath]:gameSlice.reducer,
        dice:diceSlice
    },
    middleware: (getDefaultMiddleware) => {return getDefaultMiddleware().concat([
        gameSlice.middleware,
    ])}
})

export default store
