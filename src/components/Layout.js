import * as React from 'react';
import {Typography}  from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Layout({title, children}) {
  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
           <Typography variant="h6" gutterBottom component="div">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
  );
}
