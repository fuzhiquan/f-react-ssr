import Home from '../page/home'
import Login from '../page/login'

export default [
    {
        path: '/',
        key: '/',
        exact: true,
        component: Home
    },
    {
        path: '/login',
        key: '/login',
        exact: true,
        component: Login,
        loadData: Login.loadData //用来服务端加载数据，如果有loadData的属性那么就需要在服务端请求并渲染完成后反给客户端
    }
]