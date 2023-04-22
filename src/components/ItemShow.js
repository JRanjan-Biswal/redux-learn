import { useSelector } from 'react-redux';

const ItemShow = () => {
    const itemShow = useSelector(state => state.item.numberOfItem)
    return (
        <div>
            <span>Item Show</span>
            <span style={{fontWeight:'600', fontSize: '2rem'}}>{itemShow}</span>
        </div>
    )
}

export default ItemShow;