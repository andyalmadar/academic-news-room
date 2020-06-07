import { types } from "../actions";

const defaultState = {
	fetching: false,
	error: null,
    shownews: [],
    lightmode: false
};

// El reducer, como el resto de las cosas, es algo fundamental pues tomará cada dispatch y hará lo necesario con el state, retornando su nueva forma luego de la acción
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case types.NEWS_FETCH:
            return {
                ...state,
                fetching: true
            }
        case types.NEWS_SHOW:
            return {
                ...state,
                shownews: action.payload,
                fetching: false
            }
        case types.NEWS_ERROR:
            return {
                ...state,
                fetching: false,
                error: true
            }
        case types.LIGHT_TOGGLE:
            return {
                ...state,
                lightmode: !state.lightmode
            }
        default:
            return {
                ...state
            }
    }
};