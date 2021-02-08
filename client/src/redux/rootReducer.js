import { combineReducers } from 'redux'
import { userReducer } from './users/user.reducer'

const reducers = {
    users: userReducer,
}

export const rootReducer = combineReducers(reducers)
