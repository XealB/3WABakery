import { useGetGamePastriesQuery } from "../../store/slice/gameSlice"

const Home = () => {
    const {data:pastries, isLoading, isError, isSuccess, error} = useGetGamePastriesQuery()
    console.log(pastries)
    return(
        <>
        
        </>
    )
}
export default Home