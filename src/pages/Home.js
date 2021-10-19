import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}))

const Home = () => {
  const classes = useStyles()
  return <div className={classes.container}>Home</div>
}

export default Home
