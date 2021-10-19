import { makeStyles } from '@mui/styles'
import ClientCard from '../components/ClientCard'
import { Container } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}))

const Clients = () => {
  const classes = useStyles()
  return <Container className={classes.container}>client list</Container>
}

export default Clients
