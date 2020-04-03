import * as types from '../actions/action-types'

const initialState = {num: 1}
export default function(state=initialState, action) {
    switch(action.type) {
        case types.LOGIN_MINUS:
            return {num: state.num-1}
        default:
            return state
    }
}