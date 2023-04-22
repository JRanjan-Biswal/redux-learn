import { BUY_ICECREAM } from "./iceCreamType";

const initialState = {
    iceCreams: {
        vanilla: 20,
        chocolate: 20,
        strawberry: 20
    }
};

const iceCreamReducer = (state = initialState, action) => {
    let iceCreamName = action.name;
    switch (action.type) {
        case BUY_ICECREAM:
            if (iceCreamName === 'vanilla') {
                return {
                    ...state,
                    iceCreams: {
                        ...state.iceCreams, 
                        vanilla: state.iceCreams.vanilla - action.payload
                    }
                };
            }
            else if (iceCreamName === 'chocolate') {
                return {
                    ...state,
                    iceCreams: state.iceCreams.chocolate - action.payload
                };
            }
            else {
                return {
                    ...state,
                    iceCreams: state.iceCreams.strawberry - action.payload
                }
            }
        default: return state;
    }
};

export default iceCreamReducer;