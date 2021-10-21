import * as React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ClientCard(props) {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.client._name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/patients/${props.client.slug}`}>
            Consulter
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
