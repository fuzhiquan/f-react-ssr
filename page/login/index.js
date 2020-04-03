import React, {useState} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/login'

function Login(props) {
    return <div>
        <h2>{props.num}</h2>
        <button onClick={() => {props.minus()}}>-</button>
    </div>
}

const warpperLogin = connect(
    state => state.login,
    actions
)(Login)
export default warpperLogin