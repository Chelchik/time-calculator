import { combineReducers, createStore } from "redux";
import { InputValueReducer } from "../features/inputValueSlice";
import { submitReducer, TimesReducer } from "../features/submitSlice";

export const store = createStore(combineReducers({
    inputValue: InputValueReducer,
    submit: submitReducer
}))