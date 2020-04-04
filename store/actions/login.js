import * as types from './action-types'
import axios from 'axios'

export function minus() {
    return {type: types.LOGIN_MINUS}
}
export function getUsers() {
    return function(dispatch, getState) {
        return axios.get('http://localhost:4000/api/users').then(function(response) {
            console.log(response)
            const datalist = response.data
            dispatch({
                type: types.LOGIN_REQUEST_SUCCESS,
                payload: datalist
            })
        })
    }
}