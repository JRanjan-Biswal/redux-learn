import { BUY_ICECREAM } from './iceCreamType';

export const buyIceCream = (number, name) => {
    return {
        type: BUY_ICECREAM,
        payload: number,
        name
    }
}