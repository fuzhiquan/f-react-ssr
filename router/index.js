import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../page/home'
import Login from '../page/login'

export default <React.Fragment>
    <Route path='/' exact component={Home}/>
    <Route path='/login' component={Login}/>
</React.Fragment>