import * as types from '../actions/action-types'

const initialState = {num: 0}
export default function(state=initialState, action) {
    switch(action.type) {
        case types.HOME_ADD:
            return {num: state.num + 1}
        default:
            return state
    }
}