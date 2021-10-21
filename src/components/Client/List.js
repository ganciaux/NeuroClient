import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import Grid from '@mui/material/Grid'
import * as api from '../../api/client'
import ClientCard from './Card'

const ClientList = () => {
  const { data, error, isLoading, isError } = useQuery(
    'clients',
    api.getClients,
  )

  if (isLoading) {
    return <Loader type="ThreeDots" color="#ccc" height={30} />
  }

  if (isError) {
    return <span>ERROR: {error.message}</span>
  }

  return (
    <Grid container spacing={2}>
      {data?.map((client) => {
        return <ClientCard key={client._id} client={client}> </ClientCard>
      })}
    </Grid>
  )
}

export default ClientList
