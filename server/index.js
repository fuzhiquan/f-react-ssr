import React from 'react'
import {StaticRouter, Route, matchPath} from 'react-router-dom'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import routers from '../router'
import Header from '../component/header'
import {getServerStore} from '../store'
const express = require('express')

const app = express()
app.use(express.static('public'))

app.get('*', function(req, res) {
    const store = getServerStore()
    //1.获取与url匹配的路由
    const mathRouters = routers.filter(route => matchPath(req.path, route))
    //2.获取有loadData属性的路由，也就是需要加载数据的路由，并且执行请求
    const promises = []
    mathRouters.forEach(route => {
        if(route.loadData) {
            promises.push(route.loadData(store))
        }
    })
    Promise.all(promises).then(function() {
        const domStr = renderToString(
            <Provider store={store}>
                <StaticRouter context={{}} location={req.path}>
                    <React.Fragment>
                        <Header/>
                        <div>
                            {
                                routers.map(route => {
                                    return <Route {...route}/>
                                })
                            }
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
                    <link rel='stylesheet' href='/css/index.css'/>
                </head>
                <body>
                    <div id='root'>${domStr}</div>
                    <script>
                        window.context = {
                            state:${JSON.stringify(store.getState())}
                        }
                    </script>
                    <script src='/client.js'></script>
                </body>
            </html>
        `)
    })
})

app.listen(3000, () => {
    console.log('serving http://localhost port 3000')
})