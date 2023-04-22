import { BUY_ITEM  } from './itemType';

const initialState = {
    numberOfItem: 20
}

const itemReducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_ITEM: return {
            ...state,
            numberOfItem: state.numberOfItem - action.payload
        }
        default: return state
    }
}

export default itemReducer;