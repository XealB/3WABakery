import { useGetGamePastriesQuery } from "../../store/slice/gameSlice"
import './style.css'

const Home = () => {
    
    const {data:pastries, isLoading, isError, isSuccess, error} = useGetGamePastriesQuery()
    const img = 'https://placehold.co/300x150'
    
    if(isLoading){
        return(
            <div>Chargement</div>
        )
    }
    if(isError){
        return(
            <div>erreur : {error.message}</div>
        )
    }
    if(isSuccess){
        const listPrize = pastries.map((i) => 
        <div> 
            <div key={i.id}  className={i.quantity>0 ? 'lotStock' : 'lotOutofStock'}>
                <img src={img} alt="photo" />
                <div>{i.name}</div>
                <div>Quantite restante: {i.quantity}</div>  
            </div> 
        </div>)

        return(
            <>
            <h3>Jouer pour gagner des recompenses</h3>
            <button onClick={null}>Jouer</button>
            <h3>Lots Restant</h3>
            <div className="tableLot">{listPrize}</div>
            </>
        )
    }
}
export default Home