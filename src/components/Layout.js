import * as React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function Layout({ title, children }) {
  return (
    <Box>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{
          borderBottom: '1px solid lightgray',
          paddingLeft: '20px',
          marginLeft: '-20px',
          marginRight: '-20px',
          marginBottom: '20px',
          paddingBottom: '10px',
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}
