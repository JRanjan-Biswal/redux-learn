import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainer = () => {
    const userData = useSelector(state => state.user.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])
    return (
        <>
            {userData?.map((user, index) => <div key={index}>{user.name}</div>)}
        </>
    )
}

export default UserContainer;