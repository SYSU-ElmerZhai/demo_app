import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {hashHistory} from 'react-router'
import configureStore from './store/configureStore'

import './static/css/common.less'

// 引用并执行 redux-demo
// import fn from './redux-demo.js'
// fn()


const store = configureStore()
import RouteMap from './router/routeMap'
// 测试 fetch 的功能
import { getData, postData } from './fetch/test.js'
// import { getData, postData } from './fetch/data.js'
getData();
postData();
render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)