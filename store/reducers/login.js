import * as types from '../actions/action-types'

const initialState = {num: 0, userList: []}
export default function(state=initialState, action) {
    switch(action.type) {
        case types.LOGIN_REQUEST_SUCCESS:
            return {num: action.payload.length, userList: action.payload}
        default:
            return state
    }
}