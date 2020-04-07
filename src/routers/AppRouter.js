import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import LoginPage from '../components/LoginPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute.js'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
      <PrivateRoute path="/create" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default AppRouter