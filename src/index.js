import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import LoginForm from './Ui/LoginForm'
import App from './App'
import Home from './container/Home'
import vendas from './container/vendas'
import pedidos from './container/pedidos'
import estoque from './container/estoque'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'



ReactDOM.render(
    <Router history= { hashHistory } >
        <Route path='/' component= { App } >
        <IndexRoute component= { Home } />
            <Route path='/vendas' component= { vendas } />
            <Route path='/pedidos' component= { pedidos } />
            <Route path='/estoque' component= { estoque } />
        </Route>
        <Route path='/Login' component= { LoginForm } />
    </Router>
    ,
    document.getElementById('root'))
registerServiceWorker()
