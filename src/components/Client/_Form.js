import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
})

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

function Form() {
  const { register, handleSubmit, formState, setError, control } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  })
  const { isSubmitting, isSubmitted, isSubmitSuccessful, errors } = formState
  const onSubmit = async (data) => {
    await wait(2000)
    console.log('_form:', data)
    /*setError('username', {
      type: 'manual',
      message: "erreur serveur"
    })*/
  }

  if (isSubmitSuccessful) {
    console.log('redirect')
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={1}
        sx={{ border: '1px solid black', borderRadius: '5px' }}
      >
        <Grid item xs={12}>
          {isSubmitSuccessful && (
            <div className="alert alert-success">Merci pour l'inscription</div>
          )}
        </Grid>
        <Grid item xs={6}>
          <input name="username" {...register('username')} />
          {errors.username && <span>{errors.username.message}</span>}
        </Grid>
        <Grid item xs={6}>
          <input name="email" {...register('email')} />
          {formState.errors.email && <span>{errors.email.message}</span>}
        </Grid>
        <Grid item xs={12}>
          <button disabled={isSubmitting} type="submit">
            S'inscrire
          </button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form
