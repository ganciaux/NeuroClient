import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Loader from 'react-loader-spinner'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import * as api from '../api/client'
import Layout from '../components/Layout'
import ClientForm from '../components/Client/Form'

const Client = (props) => {
  const clientId = props.match.params.id
  const [client, setClient] = useState({})
  const setClientDate = (data) => {
    setClient(data)
  }
  const { data, error, isLoading, isError } = useQuery(
    ['clients', clientId],
    () => api.getClient(clientId),
    { onSuccess: setClientDate },
  )
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  if (isLoading) {
    return <Loader type="ThreeDots" color="#ccc" height={18} />
  }

  if (isError) {
    return <Alert severity="error">Impossible de charger le patient — {error.message}</Alert>
  }

  return (
    <Layout title={data._name}>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          marginBottom: '20px',
          overflow: 'hidden',
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Fiche" />
          <Tab label="Rendez-vous" />
          <Tab label="Paiements" />
          <Tab label="Documents" />
        </Tabs>
      </Box>
      <Box
        sx={{
          boxShadow: 2,
          border: '1px solid lightgrey',
          borderRadius: '5px',
          padding: '15px',
        }}
      >
        {value === 0 && <ClientForm client={client} />}
        {value === 1 && (
          <Grid item xs={12}>
            Rendez vous...
          </Grid>
        )}
        {value === 2 && (
          <Grid item xs={12}>
            Paiments...
          </Grid>
        )}
        {value === 3 && (
          <Grid item xs={12}>
            Documents...
          </Grid>
        )}
      </Box>
    </Layout>
  )
}

export default Client
