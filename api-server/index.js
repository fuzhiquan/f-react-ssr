const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: '*'
}))
app.get('/api/users', function(req, res) {
    const datalist = [
        {id: 001, name: 'zhangsan', age: 19},
        {id: 002, name: 'lisi', age: 25},
        {id: 003, name: 'wangwu', age: 12},
        {id: 004, name: 'zhaoliu', age: 28},
    ]
    res.json(datalist)
})
app.listen(4000, function() {
    console.log('serving port 4000')
})