import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { launchDice } from '../../store/slice/diceSlice';
import { useGetGamePastriesQuery, useUpdatePastriesMutation, useGetWonPastriesQuery } from '../../store/slice/gameSlice';
import { useEffect, useState } from 'react';




const Game = () => {

    const dispatch = useDispatch();
    const dices = useSelector((state) => state.dice.dices);
    const result = useSelector((state) => state.dice.result);
    const attempt = useSelector((state) => state.dice.attempt);
    const win = useSelector((state) => state.dice.win)

    const {data:pastries, isLoading, isError, isSuccess, error} = useGetGamePastriesQuery()
    // const [updatePastries] = useUpdatePastriesMutation();

    const [wonPastries, setWonPastries] = useState([]);

    const diceVisu = dices.map((dice,i)=> {
        return(<div key={i}>{dice}</div>)
    })

    const handleClick = () => {
        dispatch(launchDice());
    }
    useEffect(() => {
        if (result && pastries && isSuccess) {

            let quantity = 0;
            if (result === 'Double') quantity = 1;
            else if (result === 'Triple') quantity = 2;
            else if (result === 'Quadruple') quantity = 3;

            if (quantity > 0) {
                const wonPastriesData = getWonPastries(pastries, quantity);
                setWonPastries(wonPastriesData);
            } else {
                setWonPastries([]);
            }
        }
    }, [result, pastries, isSuccess]);


    const getWonPastries = (pastries, quantity) => {
        if (!pastries || !Array.isArray(pastries)) return [];

        const availablePastries = pastries.filter((p) => p.quantity > 0);
        if (availablePastries.length === 0) return [];

        const shuffledPastries = [...availablePastries].sort(() => 0.5 - Math.random());
        return shuffledPastries.slice(0, quantity);
    };

    const prize = () => {
        if (result === 'Quadruple' || result === 'Triple' || result === 'Double') {
            return <p>Vous avez un {result} !</p>;
        }
        else if (result === 'Perdu') {
            return <p>Aucune combinaison... {result}</p>
        }
    };

    return(
        <div>
            <div className='test'>
                {diceVisu}
            </div>
            <div className='button'>
                <div>{prize()}</div>
                {wonPastries.map((p) => (
                    <div key={p.id}>
                        {p.name}
                    </div>
                ))}
                <button onClick={handleClick} disabled={attempt === 0 || win===true}>{attempt===0 || win ? `plus de tentatives` : `${attempt} tentatives restantes`}</button>
            </div>
        </div>
    )
}
export default Game