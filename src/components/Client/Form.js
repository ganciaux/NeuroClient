import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import frLocale from 'date-fns/locale/fr'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({

})

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

export default function ClientForm({ client }) {
  const [date, setDate] = useState(client.birthdate)
  const { handleSubmit, register, formState } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  })
  const { isSubmitting, isSubmitSuccessful, errors } = formState
  const onSubmit = async (data) => {
    console.log("onSubmit:", data)
    console.log("onSubmit:", date)
    /*setError('username', {
      type: 'manual',
      message: "erreur serveur"
    })*/

  }

  console.log("ClientForm:", date)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Nom"
            variant="standard"
            defaultValue={client.name}
            {...register('name')}
            sx={{ width: '95%' }}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Prénom"
            variant="standard"
            defaultValue={client.firstname}
            {...register('firstname')}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Téléphone"
            variant="standard"
            defaultValue={client.phone}
            {...register('phone')}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            defaultValue={client.email}
            {...register('email')}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Adresse"
            variant="standard"
            defaultValue={client.address}
            {...register('address')}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Ville"
            variant="standard"
            defaultValue={client.city}
            {...register('city')}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-basic"
            label="Code postal"
            variant="standard"
            defaultValue={client.zip}
            {...register('zip')}
            sx={{ width: '95%' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
            <DatePicker
              label="Date de naissance"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params}/> }
              
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button disabled={isSubmitting} type="submit" variant="contained">
            Modifier
          </Button>
        </Grid>
        {isSubmitSuccessful && (
            <Grid item xs={12}>
              <Alert severity="success">Patient mis à jour avec succès!</Alert>
            </Grid>
          )}
      </Grid>
    </form>
  )
}
