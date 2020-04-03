import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../containers/home'
import Login from '../containers/login'

export default <React.Fragment>
    <Route path='/' exact component={Home}/>
    <Route path='/login' component={Login}/>
</React.Fragment>