import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./useType";
import axios from "axios";

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const response = res.data
                dispatch(fetchUserSuccess(response));
            })
            .catch(error => dispatch(fetchUserFailure(error)))

    }

}

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}