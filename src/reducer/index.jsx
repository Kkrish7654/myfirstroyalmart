import { combineReducers } from 'redux';
import { ProductReducer, SelectedProducts } from './ProductReducer';


const reducer = combineReducers({
    // Add reducers here
    allProducts: ProductReducer,
    product: SelectedProducts,
    removeproduct: SelectedProducts
});

export default reducer;