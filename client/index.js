import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import routers from '../router'
import Header from '../component/header'

ReactDOM.hydrate(<BrowserRouter>
    <React.Fragment>
        <Header/>
        <div>
            {routers}
        </div>
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'))