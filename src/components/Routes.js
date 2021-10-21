import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound'
import Home from '../pages/Home'
import Clients from '../pages/Clients'
import Client from '../pages/Client'
import Payments from '../pages/Payments'
import Bills from '../pages/Bills'
import Sessions from '../pages/Sessions'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/patients" exact component={Clients}></Route>
      <Route path="/patients/:id" exact component={Client}></Route>
      <Route path="/paiements" exact component={Payments}></Route>
      <Route path="/factures" exact component={Bills}></Route>
      <Route path="/rendez-vous" exact component={Sessions}></Route>
      <Route component={PageNotFound}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  )
}

export default Routes
