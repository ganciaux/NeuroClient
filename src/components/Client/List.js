import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import Grid from '@mui/material/Grid'
//import * as api from '../../api/client'
import ClientCard from './Card'
import { Button } from '@mui/material'
import axios from 'axios'

export const api = axios.create({
  baseURL: `http://localhost:5000/api`,
})

const ClientList = () => {
  const [enabled, setEnable] = useState(false);

  const { data, error, isLoading, isError } = useQuery(
    'clients',
    () =>
      api.get(`/clients/`).then((res) => res.data.data).finally(() => setEnable(false)),
      {enabled: enabled}
  )

  console.log(enabled)
  /*
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
  */
  if (isLoading) {
    return <Loader type="ThreeDots" color="#ccc" height={30} />
  }

  if (isError) {
    return <span>ERROR: {error.message}</span>
  }

  return (
    <Grid container spacing={2}>
      <Button disabled={enabled} onClick={() => setEnable(true)}>Search</Button>
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
