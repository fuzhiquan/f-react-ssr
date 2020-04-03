import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/home'

function Home(props) {
    return <div>
        <h2>{props.num}</h2>
        <button onClick={() => {props.add()}}>+</button>
    </div>
}

const wrapperHome = connect(
    state => state.home,
    actions
)(Home)
export default wrapperHome