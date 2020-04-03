import React from 'react'
import {StaticRouter} from 'react-router-dom'
import {renderToString} from 'react-dom/server'
import routers from '../router'
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

app.get('*', function(req, res) {
    const domStr = renderToString(<StaticRouter context={{}} location={req.path}>
        {
            routers
        }
    </StaticRouter>)
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