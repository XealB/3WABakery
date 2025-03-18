import Game from "../../components/Game"
import GameRules from "../../components/GameRules"

const GamePage = () => {
    return(
        <>
            <h2>Jeu du Yams</h2>
            <GameRules />
            <Game />
        </>
    )
}
export default GamePage