import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { useContext } from 'react';
import AuthContext from '../auth/Auth';
import { checkAuth } from '../../services/firebase';
import AddOrUpdateUser from '../usersDashboard/AddOrUpdateProfile';

//List Item
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

//service
import { GetAuth } from '../../services/firebase';
import { signOut } from 'firebase/auth';

//user managements
import ListUsers from './ListUsers';
import ButtonAddUser from './Tools/ButtonAddUser'

//List Material
import MaterialsList from './MaterialsList';
import ButtonAddMaterial from './Tools/ฺButtonAddMaterial'


function CheckUser() {
  //const name = useContext(AuthContext)
  const name = 'โหมดผู้ดูแล';

  return (
    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      sx={{ flexGrow: 1 }}
    >
      {name}
    </Typography>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      Kamol Khampibool {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//ทดสอบจัดการปิดเปิดฟอร์มจากเพลิสย์
const listItemSteps = ["Dashboard", "AddList", "UserManage"]

function getListContent(list) {
  switch (list) {
    case 0:
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <ListUsers />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                justifyContent: 'flex-end',
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 600,
                justifyContent: 'flex-end',
              }}
            >
              <AddOrUpdateUser />
            </Paper>
          </Grid>
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <Grid item xs={12} md={4} lg={3}>
            
              <ButtonAddMaterial />
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 540,
                justifyContent: 'flex-end',
              }}
            >
              <MaterialsList />
            </Paper>
          </Grid>
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <ButtonAddUser />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <ListUsers />
            </Paper>
          </Grid>
        </React.Fragment>
      );
    default:
      throw new Error('Unknown step');
  }
}

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [list, setList] = React.useState(0)
  const [listUser, setListUser] = React.useState('none');
  const [openDashboard, setOpenDashboard] = React.useState('flex');
  const toggleDrawer = () => {
    setOpen(!open);
  };

//ทดสอบคลิ๊ก list
   const listClickDashboard = () => {
     setList(0);
   };
  const listClickAddList = () => {
    setList(1)
  }
  const listClickUserManage = () => {
    setList(2)
  }
  const listClickChart = () => {
    setList(3);
  };

  //List ออกจากระบบ
  const handleSingOut = () => {
    signOut(GetAuth)
      .then(() => {
        alert('ออกจากระบบสำเร็จ');
      })
      .catch((error) => {
        alert('ไม่สามารถออกจากระบบได้');
      });
  };



  

  

  

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <CheckUser sx={{ pt: 4 }} />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          {/* List Item */}
          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                onClick={(e) => listClickDashboard()}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText
                primary="รายการวัสดุ"
                onClick={(e) => listClickAddList()}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText
                primary="จัดการ User"
                onClick={(e) => listClickUserManage()}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText
                primary="Reports"
                onClick={(e) => listClickChart()}
              />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText
                onClick={(e) => handleSingOut()}
                primary="ออกจากระบบ"
              />
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
            <ListSubheader component="div" inset>
              Saved reports
            </ListSubheader>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Current month" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <Link href="/homeuser">
                <ListItemText primary="โหมดผู้ใช้งาน" />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <Link href="/">
                <ListItemText primary="กลับหน้าแรก" />
              </Link>
            </ListItemButton>
          </List>
        </Drawer>
        {/* Close List Item */}

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* แสดงผล ดึงข้อมูลจาก getListContent */}

              {getListContent(list)}

              {/* จบ การแสดงผล*/}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
          
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
