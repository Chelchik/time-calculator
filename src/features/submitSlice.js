export function submitReducer(state=timesInitialState, action) {
    if (action.type === "submit") {
        return { ...state, 
            timesInWeek: action.payload / 7 / 24 / 60 / 60,
            timesInDays: action.payload / 24 / 60 / 60,
            timesInHours: action.payload / 60 / 60, 
            timesInMinutes : action.payload / 60,
        }
    }

    return state
}

export const timesInitialState = {
        timesInWeek: 0,
        timesInDays: 0,
        timesInHours: 0,
        timesInMinutes: 0
}

export function timesInWeek(state) {
    return state.submit.timesInWeek;
}

export function timesInDays(state) {
    return state.submit.timesInDays;
}

export function timesInHours(state) {
    return state.submit.timesInHours;
}

export function timesInMinutes(state) {
    return state.submit.timesInMinutes;
}