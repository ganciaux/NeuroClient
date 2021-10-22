import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import Grid from '@mui/material/Grid'
import * as api from '../../api/client'
import ClientCard from './Card'
import { Button } from '@mui/material'

const ClientList = () => {
  const { data, error, isLoading, isError } = useQuery(
    'clients',
    api.getClients,
  )

  const {
    status,
    data: result,
    error: searchError,
    refetch,
  } = useQuery('Clients', api.getClients, {
    refetchOnWindowFocus: false,
    enabled: false,
    manual: true,
  })

  const search = () => {
    refetch({ mode: 'last' })
  }

  if (isLoading) {
    return <Loader type="ThreeDots" color="#ccc" height={30} />
  }

  if (isError) {
    return <span>ERROR: {error.message}</span>
  }

  return (
    <Grid container spacing={2}>
      <Button onClick={search}>Search</Button>
      {data?.map((client) => {
        return (
          <ClientCard key={client._id} client={client}>
            {' '}
          </ClientCard>
        )
      })}
    </Grid>
  )
}

export default ClientList
