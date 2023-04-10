import { combineReducers } from 'redux';
import { CartReducer, ProductReducer, SelectedProducts } from './ProductReducer';


const reducer = combineReducers({
    // Add reducers here
    allProducts: ProductReducer,
    product: SelectedProducts,
    removeproduct: SelectedProducts,
    addToCart: CartReducer
});

export default reducer;