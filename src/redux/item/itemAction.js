import { BUY_ITEM } from './itemType';

export const buyItem = (number) => {
    return {
        type: BUY_ITEM,
        payload: number
    }
}