import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import routes from './routes'

const div = document.createElement ('div')
document.body.appendChild (div)

const history = syncHistoryWithStore (browserHistory, store)

render (
    <Provider store={store} >
        <Router history={history} routes={routes} />
    </Provider>,
    div
)
