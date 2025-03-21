import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const gameSlice = createApi({
    reducerPath:'gameReducer',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3001/game'}),
    endpoints:(build) => {return {
        getGamePastries: build.query({
            query:() => {return {url:'/pastries', credentials:'include'}}
        }),
        getGamePastriesById: build.query({
            query: (id) => {return {url:`/pastries/${id}`, credentials:'include'}}
        }),
        getWonPastries: build.query({
            query: (quantity) => {return { url: `/win-pastries/${quantity}`, credentials: 'include' }},
        }),
        updatePastries:build.mutation({
            query:({updatedPastries, id}) => ({
                url: `/pastries/${id}`,
                method: 'PATCH',
                body: updatedPastries,
                credentials: 'include'
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(gameSlice.util.invalidateTags(['Pastries']));
                } catch (error) {
                    console.error('Error updating pastries:', error);
                }
            },
            invalidatesTags: ['Pastries'],
        }),
        tagTypes: ['Pastries'],
    }}
    
})
export const {
    useGetGamePastriesQuery,
    useGetGamePastriesByIdQuery,
    useGetWonPastriesQuery,
    useUpdatePastriesMutation
} = gameSlice

