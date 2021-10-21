import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import frLocale from 'date-fns/locale/fr'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

export default function ClientForm({ client }) {
  const [date, setDate] = useState(client.birthdate)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Nom"
            variant="standard"
            defaultValue={client.name}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Prénom"
            variant="standard"
            defaultValue={client.firstname}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Téléphone"
            variant="standard"
            defaultValue={client.phone}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            defaultValue={client.email}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Adresse"
            variant="standard"
            defaultValue={client.address}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Ville"
            variant="standard"
            defaultValue={client.city}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Code postal"
            variant="standard"
            defaultValue={client.zip}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
            <DatePicker
              label="Date de naissance"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" variant="contained">
            Modifier
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
