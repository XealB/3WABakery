import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dices: [0,0,0,0,0],
    result: null,
    attempt:3,
    loading:false,
}

const diceCombo = (dices) => {
    const counts = dices.reduce((acc, dice) => {
        acc[dice] = (acc[dice] || 0) + 1;
        return acc;
    }, {});

    for (const dice in counts) {
        if (counts[dice] === 4) return 'Quadruple';
        if (counts[dice] === 3) return 'Triple';
        if (counts[dice] === 2) return 'Double';
    }

    return null;
};

const diceSlice = createSlice({
    name:'dice',
    initialState,
    reducers:{
        launchDice: (state,action) => {
            if (state.attempt > 0) {
                const newDices = state.dices.map(() => Math.floor(Math.random() * 6) + 1);
                state.dices = newDices;
                state.attempt -= 1;
                state.result = diceCombo(newDices);
        }

    }
}
})

export const { launchDice } = diceSlice.actions
export default diceSlice.reducer;