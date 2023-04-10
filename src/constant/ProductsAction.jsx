import ActionType from "../actions/ActionType"

export const setProducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) => {
    return {
        type: ActionType.SELECT_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProducts = () => {
    return {
        type: ActionType.REMOVE_PRODUCTS
    }
}

export const addToCart = () => {
    return {
        type: ActionType.ADD_TO_CART
    }
}