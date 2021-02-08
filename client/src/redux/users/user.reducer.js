import { types, registerUser } from './users.actions'

const initialState = {
    isAuth: false,
    currentUser: {},
    isLoading: false,
    registerCompleted: false,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_USER: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case types.REGISTER_USER_FAIL: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case types.REGISTER_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                registerCompleted: true,
            }
        }
        default: {
            return state
        }
    }
}
