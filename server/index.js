import React from 'react'
import Home from '../containers/home/index'
import {renderToString} from 'react-dom/server'
const express = require('express')

const app = express()
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
            </body>
        </html>
    `)
})

app.listen(3000, () => {
    console.log('serving http://localhost port 3000')
})