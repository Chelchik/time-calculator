export function InputValueReducer(state=numberInitialState, action) {
    if (action.type === "INPUT_VALUE") {
        return {...state, number: parseInt(action.payload)}
    }

    return state;
}

export const numberInitialState = {
    number: 3600
}

export function selectNumber(state) {
    return state.inputValue.number
}