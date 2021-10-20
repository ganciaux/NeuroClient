import React from 'react'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import ListItemIcon from '@mui/material/ListItemIcon'
import Tooltip from '@mui/material/Tooltip'

export default function MenuLink({ tooltip, title, link, classes, children }) {
  return (
    <Tooltip title={tooltip}>
      <Link href={link} underline="none">
        <ListItem button>
          <ListItemIcon>{children}</ListItemIcon>
          <span className={classes.text}>{title}</span>
        </ListItem>
      </Link>
    </Tooltip>
  )
}
