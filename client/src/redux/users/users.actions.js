import axios from 'axios'

export const types = {
    REGISTER_USER: 'REGISTER_USER',
    REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
    REGISTER_USER_FAIL: 'REGISTER_USER_FAIL',
}

export const registerUser = (email, name, password) => async dispatch => {
    try {
        dispatch({
            type: types.REGISTER_USER,
        })

        const res = await axios.post(
            'api/users',
            { email, name, password },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        dispatch({
            type: types.REGISTER_USER_SUCCESS,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)
        dispatch({
            type: types.REGISTER_USER_FAIL,
            payload: {
                msg: error,
            },
        })
    }
}
