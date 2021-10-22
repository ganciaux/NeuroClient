import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useQuery, useMutation, QueryClient, useQueryClient } from 'react-query'
import ClearIcon from '@mui/icons-material/Clear'
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
import * as api from '../../api/client'
import { IconButton } from '@mui/material'

const schema = yup.object({
  name: yup.string().required('Obligatoire'),
  firstname: yup.string().required(),
})

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

export default function ClientForm({ client, clientId }) {
  const [date, setDate] = useState(client.birthdate)
  const [isOpen, setIsOpen] = useState(false)
  const { handleSubmit, register, formState, control } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  })
  const { isSubmitting, isSubmitSuccessful, errors } = formState
  const onSubmit = async (data) => {
    setIsOpen(false)
    const updateClient = { ...data, birthdate: date, id: client._id }
    console.log('onsubmit:', date, updateClient.birthdate)
    mutate(updateClient)
  }
  const queryClient = useQueryClient()
  const { isLoading, mutate, error, isError } = useMutation(api.updateClient, {
    onSuccess: (data) => {
      queryClient.setQueryData([['clients', clientId], data])
      setIsOpen(true)
    },
    onError: (err) => {
      console.log('onError:', err)
      setIsOpen(true)
    },
  })

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
            {/*
                      <Controller
              control={control}
              render={({
                field: {
                  onChange = (value) => {
                    setDate(value)
                  },
                  value,
                },
              }) => (
                <DatePicker
                  label="Date de naissance"
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
              defaultValue={client.birthdate}
              name="birthdate"
              />*/}
            <DatePicker
              label="Date de naissance"
              value={date}
              clearable
              disableFuture
              onChange={(value) => setDate(value)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={isLoading || isSubmitting}
            type="submit"
            variant="contained"
          >
            Modifier
          </Button>
        </Grid>
        {isSubmitSuccessful && isOpen && (
          <Grid item xs={12}>
            <Alert
              severity={isError ? 'error' : 'success'}
              action={
                <IconButton size="small" onClick={() => setIsOpen(false)}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              }
            >
              {isError
                ? 'Impossible de mettre à jour le patient'
                : 'Patient mis à jour avec succès!'}
            </Alert>
          </Grid>
        )}
      </Grid>
    </form>
  )
}
