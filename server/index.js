import React from 'react'
import {StaticRouter} from 'react-router-dom'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import routers from '../router'
import Header from '../component/header'
import {getServerStore} from '../store'
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

app.get('*', function(req, res) {
    const domStr = renderToString(
        <Provider store={getServerStore()}>
            <StaticRouter context={{}} location={req.path}>
                <React.Fragment>
                    <Header/>
                    <div>
                        {routers}
                    </div>
                </React.Fragment>
            </StaticRouter>
        </Provider>
    )
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(`
        <html>
            <head>
                <title>react-ssr</title>
            </head>
            <body>
                <div id='root'>${domStr}</div>
                <script src='/client.js'></script>
            </body>
        </html>
    `)
})

app.listen(3000, () => {
    console.log('serving http://localhost port 3000')
})