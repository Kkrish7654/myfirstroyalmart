import ActionType from "../actions/ActionType"

const initialState = {
    products : []
}


export const ProductReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state,products:payload}
        default:
            return state
    }
}

export const SelectedProducts = (state = {}, {type,payload}) => {
    switch (type) {
        case ActionType.SELECT_PRODUCTS:
            return {...state,...payload}

        case ActionType.REMOVE_PRODUCTS:
            return {}

        default:
            return state;
    }
}

export const CartReducer = (state = [], {type,payload}) => {
    switch (type) {
        case ActionType.ADD_TO_CART:
            return [...state,payload]
        default:
            return state;
    }
}

