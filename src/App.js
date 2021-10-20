import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home'
import IconButton from '@mui/material/IconButton'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import MenuIcon from '@mui/icons-material/Menu'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import ListAltIcon from '@mui/icons-material/ListAlt'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { makeStyles } from '@mui/styles'
import Routes from './components/Routes'
import MenuLink from './components/MenuLink'
import { theme } from './Theme'

const drawerWidthMax = 200
const drawerWidthMin = 75

const useStyles = makeStyles({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    color: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      color: 'white',
      marginLeft: 6,
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    width: drawerWidthMax,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidthMax,
      boxSizing: 'border-box',
    },
    [theme.breakpoints.down('sm')]: {
      width: drawerWidthMin,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        backgroundColor: theme.palette.primary.main,
        width: drawerWidthMin,
        boxSizing: 'border-box',
      },
    },
  },
  boxmain: {
    flexGrow: 1,
    padding: 15,
    textAlign: 'justify',
    height: '100vh',
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(8),
    },
  },
})

export default function App() {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={() => setIsOpen(!isOpen)} />
          </IconButton>
          <Typography variant="h6" component="div" noWrap sx={{ flexGrow: 1 }}>
            Neuro
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {isOpen && (
        <Drawer variant="permanent" className={classes.drawer}>
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              <MenuLink
                tooltip={`Page d'accueil`}
                title={'Home'}
                link={'/home'}
                classes={classes}
              >
                <HomeIcon className={classes.icon} />
              </MenuLink>
              <MenuLink
                tooltip={`Liste des patients`}
                title={'Patients'}
                link={'/patients'}
                classes={classes}
              >
                <AssignmentIndIcon className={classes.icon} />
              </MenuLink>
              <MenuLink
                tooltip={`Liste des paiements`}
                title={'Paiements'}
                link={'/paiements'}
                classes={classes}
              >
                <EuroSymbolIcon className={classes.icon} />
              </MenuLink>
              <MenuLink
                tooltip={`Liste des rendez-vous`}
                title={'Rendez-vous'}
                link={'/rendez-vous'}
                classes={classes}
              >
                <CalendarTodayIcon className={classes.icon} />
              </MenuLink>
              <MenuLink
                tooltip={`Liste des factures`}
                title={'Factures'}
                link={'/factures'}
                classes={classes}
              >
                <ListAltIcon className={classes.icon} />
              </MenuLink>
            </List>
          </Box>
        </Drawer>
      )}
      <Box component="main" className={classes.boxmain}>
        <Routes />
      </Box>
    </Box>
  )
}
