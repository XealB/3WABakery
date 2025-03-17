import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const gameSlice = createApi({
    reducerPath:'gameReducer',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3001/game'}),
    endpoints:(build) => {return {
        getGamePastries: build.query({query:() => {return {url:'/pastries', credentials:'include'}}})
    }}
 
})
export const {
    useGetGamePastriesQuery
} = gameSlice

