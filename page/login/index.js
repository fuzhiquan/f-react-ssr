import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/login'

function Login(props) {
    useEffect(function(){
        if(props.userList.length === 0) {
            props.getUsers()
        }
    }, [])
    return <div>
        <h2>{`当前在线人数：${props.num}`}</h2>
        <ul>
            {
                props.userList.map(user => {
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
    </div>
}

const warpperLogin = connect(
    state => state.login,
    actions
)(Login)

warpperLogin.loadData = function(store) {
    return store.dispatch(actions.getUsers())
}
export default warpperLogin