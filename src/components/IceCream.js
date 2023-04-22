import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux'

const IceCream = () => {
    const dispatch = useDispatch();
    const iceCream = useSelector(state => state.iceCream.iceCreams);

    return (
        <div>
            <h1 style={{ textDecoration: 'underline' }}>Ice Cream</h1>
            <h2>vanilla
                <button onClick={() => dispatch(buyIceCream(1, 'vanilla'))}>reduce</button>
                <span>{iceCream.vanilla}</span>
            </h2>
            <h2>strawberry
                <button>reduce</button>
                <span>{iceCream.strawberry}</span>
            </h2>
            <h2>chocolate
                <button>reduce</button>
                <span>{iceCream.chocolate}</span>
            </h2>
        </div>
    )
}

export default IceCream;