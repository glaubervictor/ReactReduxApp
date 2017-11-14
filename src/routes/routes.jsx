import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../pages/dashboard/index'
import Teste from '../pages/teste/index'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/teste" component={Teste} />
        <Redirect from="*" to="/" />
    </Router>
)