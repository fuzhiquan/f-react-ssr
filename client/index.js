import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import routers from '../router'

ReactDOM.hydrate(<BrowserRouter>
    {
        routers
    }
</BrowserRouter>, document.getElementById('root'))