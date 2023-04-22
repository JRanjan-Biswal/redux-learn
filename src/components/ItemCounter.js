import { useDispatch } from 'react-redux';
import { buyItem } from '../redux'

const ItemContainer = () => {
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(buyItem(1))}>item clicked</button>
        </>
    )
}

export default ItemContainer;