import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import itemReducer from './item/itemReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    item: itemReducer,
    user: userReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;