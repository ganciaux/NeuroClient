import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import ListItemIcon from '@mui/material/ListItemIcon'
import HomeIcon from '@mui/icons-material/Home'
import IconButton from '@mui/material/IconButton'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import MenuIcon from '@mui/icons-material/Menu'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import ListAltIcon from '@mui/icons-material/ListAlt'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import Tooltip from '@mui/material/Tooltip'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles'
import Routes from './components/Routes'

const drawerWidthMax = 200
const drawerWidthMin = 75
const links = [
  {
    text: 'Home',
    href: '/home',
    tooltip: `Page d'accueil`,
    icon: 'ListAltIcon',
  },
  {
    text: 'Clients',
    href: '/clients',
    tooltip: `Liste des clients`,
    icon: 'ListAltIcon',
  },
  {
    text: 'Paiments',
    href: '/paiements',
    tooltip: `Liste des paiments`,
    icon: 'ListAltIcon',
  },
  {
    text: 'Rendez-vous',
    href: '/rendez-vous',
    tooltip: `Liste des rendez-vous`,
    icon: 'ListAltIcon',
  },
  {
    text: 'Factures',
    href: '/factures',
    tooltip: `Liste des factures`,
    icon: 'ListAltIcon',
  },
]
export const theme = createTheme({})

const useStyles = makeStyles({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" noWrap sx={{ flexGrow: 1 }}>
            Neuro
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" className={classes.drawer}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/*
            {links.map((link) => (
              <Tooltip title={link.tooltip} key={link}>
                <ListItem button>
                  <ListItemIcon>
                    <ListAltIcon className={classes.icon} />
                  </ListItemIcon>
                  <Link
                    href={link.href}
                    underline="none"
                    className={classes.text}
                  >
                    {link.text}
                  </Link>
                </ListItem>
              </Tooltip>
            ))}
            */}
            <ListItem button>
              <ListItemIcon>
                <HomeIcon className={classes.icon} />
              </ListItemIcon>
              <Link href="/home" underline="none" className={classes.text}>
                {'Home'}
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIndIcon className={classes.icon} />
              </ListItemIcon>
              <Link href="/clients" underline="none" className={classes.text}>
                {'Clients'}
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EuroSymbolIcon className={classes.icon} />
              </ListItemIcon>
              <Link href="/paiements" underline="none" className={classes.text}>
                {'Paiments'}
              </Link>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CalendarTodayIcon className={classes.icon} />
              </ListItemIcon>
              <Link
                href="/rendez-vous"
                underline="none"
                className={classes.text}
              >
                {'Rendez-vous'}
              </Link>
            </ListItem>
            <Tooltip title="Liste des factures">
              <ListItem button>
                <ListItemIcon>
                  <ListAltIcon className={classes.icon} />
                </ListItemIcon>
                <Link
                  href="/factures"
                  underline="none"
                  className={classes.text}
                >
                  {'Factures'}
                </Link>
              </ListItem>
            </Tooltip>
          </List>
        </Box>
      </Drawer>
      <Box component="main" className={classes.boxmain}>
        <Routes />
      </Box>
    </Box>
  )
}
