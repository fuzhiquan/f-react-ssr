import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {getClientStore} from '../store'
import routers from '../router'
import Header from '../component/header'

ReactDOM.hydrate(
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <React.Fragment>
                <Header/>
                <div>
                    {routers}
                </div>
            </React.Fragment>
        </BrowserRouter>
    </Provider>, document.getElementById('root'))