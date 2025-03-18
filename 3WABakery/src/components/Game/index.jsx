import { useDispatch, useSelector } from 'react-redux';
import './style.css'
import { launchDice } from '../../store/slice/diceSlice';




const Game = () => {

    const dispatch = useDispatch();
    const dices = useSelector((state) => state.dice.dices);
    // const result = useSelector((state) => state.dice.result);
    const attempt = useSelector((state) => state.dice.attempt);


    const diceVisu = dices.map((dice,i)=> {
        return(<div key={i}>{dice}</div>)
    })
    const handleClick = () => {
        dispatch(launchDice());
    }

    return(
        <div>
            <div className='test'>
                {diceVisu}
            </div>
            <div className='button'>
                <button onClick={handleClick}>Lancer</button>
                <p>{attempt} tentatives restantes</p>
            </div>
        </div>
    )
}
export default Game