import React from 'react'
import { Route, Redirect } from 'react-router'
import { App, TodoList, TodoForm } from './components'

export default (
    <Route component={App} >
        <Route path="/view" component={TodoList} />
        <Route path="/add" component={TodoForm} />
        <Route path="/edit/:id" component={TodoForm} />
        <Redirect from="*" to="/view" />
    </Route>
)
