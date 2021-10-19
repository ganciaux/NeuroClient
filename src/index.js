import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { theme } from './Theme'
import { ThemeProvider } from '@mui/material/styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
