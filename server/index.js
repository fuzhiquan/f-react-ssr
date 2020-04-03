import React from 'react'
import Home from '../containers/home/index'
import {renderToString} from 'react-dom/server'
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('dist'))

app.get('/', function(req, res) {
    const domStr = renderToString(<Home/>)
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