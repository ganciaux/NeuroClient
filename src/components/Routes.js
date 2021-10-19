import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import PageNotFound from '../pages/PageNotFound'
import Home from '../pages/Home'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
  },
}))

const Routes = () => {
  const classes = useStyles()
  return (
    <>
      <Navbar></Navbar>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={10} xs={10}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route component={PageNotFound}></Route>
              <Redirect to="/"></Redirect>
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </>
  )
}

export default Routes
