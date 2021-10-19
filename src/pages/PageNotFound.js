import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}))

const PageNotFound = () => {
  const classes = useStyles()
  return <div className={classes.container}>Hey, cette page n'existe pas !</div>
}

export default PageNotFound
