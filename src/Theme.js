import { createTheme } from '@mui/material/styles'
import { purple, blue } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      light: blue[300],
    },

    secondary: {
      main: blue[100],
    },
  },
})
