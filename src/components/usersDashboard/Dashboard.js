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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import { FormGroup } from '@mui/material';

//context and database
import { useContext } from 'react';
import AuthContext from '../auth/Auth';
import { GetAuth, db, auth } from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';



//ListItem
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
import {Link} from 'react-router-dom'
//DialogForm
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
/*Alert */
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';

//react-hook-form and validate form
import { useForm } from 'react-hook-form'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'



function CheckUser() {
  
  const name = "โหมดผู้ใช้งานทั่วไป"


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
      Kamol Khampibool{' '}
      {new Date().getFullYear()}
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

const mdTheme = createTheme();


function handleSingOut() {
  signOut(GetAuth)
    .then(() => {
      alert('ออกจากระบบสำเร็จ');
    })
    .catch((error) => {
      alert('ไม่สามารถออกจากระบบได้');
    });
}

function DashboardContent() {
  const authEmail = useContext(AuthContext)

  const [open, setOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const [errors,setErrors] = React.useState(false)

  const [name,setName]=React.useState(null)
  const [lastname,setLastname] = React.useState(null)
  const [position,setPosition] = React.useState(null)
  const [departments,setDepartments]=React.useState(null)
  const [telOfUBU,setTelOfUBU]=React.useState(null)
  const [telPrivate,setTelPrivate]=React.useState(null)
  const [social,setSocial]=React.useState(null)
  const [email, setEmail] = React.useState(null);
  const [alert,setAlert] = React.useState(false)

  const successAlert = () => {
    setAlert(!alert);
  };

  const errorAlert = () => {
    setAlert(!alert)
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

   const handleClickOpen = () => {
     setDialogOpen(true);
   };
  
  
  const handleClose = () => {
    setDialogOpen(false);
  }

  const handleChangeName = (e) => {
    setName(e)
  }

    const handleChangeLastname = (e) => {
      setLastname(e);
  };
   const handleChangePosition= (e) => {
     setPosition(e);
  };
   const handleChangeDepartments = (e) => {
     setDepartments(e);
  };
  const handleChangeTelOfUBU = (e) => {
    setTelOfUBU(e);
  };

  React.useEffect(() => {
    const validate =
      name?.trim().length > 0 &&
      lastname?.trim().length > 0 &&
      departments?.trim().length > 0 &&
      telOfUBU
    
    if (validate) {
      setErrors(true)
      
    } else {
      setErrors(false)
  }
},[name,lastname,position,departments,telOfUBU])

  const handleSubmit = async (e) => {
    setDialogOpen(false);
    e.preventDefault();
   
       await addDoc(collection(db, 'UserAnother'), {
         Email: authEmail,
         Name: name,
         Lastname: lastname,
         Position: position,
         Departments: departments,
         TelOfUBU: telOfUBU,
         TelPrivate: telPrivate,
         Social: social,
       });
       setName('');
       setLastname('');
       setPosition('');
       setDepartments('');
       setTelOfUBU('');
       setTelPrivate('');
       setSocial('');
       successAlert();
      
   };
  
 
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Dialog open={alert} onClose={successAlert}>
          <Alert icon={false} severity="success">
            เพิ่มข้อมูลผู้ใช้งานสำเร็จ
          </Alert>
        </Dialog>
        <AppBar position="absolute" sx={{ bgcolor: 'green' }} open={open}>
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
          <List component="nav">
            {/*ลิสช่วงบน */}
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="โปรไฟล์ผู้ใช้" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
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

            {/*ลิสต์ช่วงล่าง*/}
            <Divider sx={{ my: 1 }} />
            <ListSubheader component="div" inset>
              Saved reports
            </ListSubheader>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              {/*ข้อมูลปรับแต่งโปรไฟล์*/}
              <ListItemText
                primary="ปรับแต่งโปรไฟล์"
                onClick={(e) => handleClickOpen()}
              />
              <Dialog open={dialogOpen} onClose={handleClose}>
                <DialogTitle>เพิ่มข้อมูลผู้ใช้งาน</DialogTitle>
                <DialogContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        autoComplete="given-name"
                        fullWidth
                        id="Name"
                        label="ชื่อ"
                        autoFocus
                        onChange={(event) =>
                          handleChangeName(event.target.value)
                        }
                        helperText={name === ' ' ? 'Empty' : ' '}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="Lastname"
                        label="นามสกุล"
                        autoComplete="family-name"
                        onChange={(event) =>
                          handleChangeLastname(event.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="Departments"
                        label="ภาควิชา/แผนก"
                        onChange={(event) =>
                          handleChangeDepartments(event.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="ตำแหน่ง"
                        id="Position"
                        onChange={(event) =>
                          handleChangePosition(event.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="TelOfUBU"
                        label="โทรศัพท์ภายใน"
                        onChange={(event) =>
                          handleChangeTelOfUBU(event.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="TelPrivate"
                        label="โทรศัพท์ที่ติดต่อได้ (ไม่บังคับ)"
                        onChange={(event) => setTelPrivate(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="ช่องทางการติดต่ออื่น เช่น Line, Facebook (ไม่บังคับ)"
                        id="Social"
                        onChange={(event) => setSocial(event.target.value)}
                      />
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>ยกเลิก</Button>
                  <Button disabled={!errors} onClick={handleSubmit}>
                    เพิ่มข้อมูล
                  </Button>
                </DialogActions>
              </Dialog>
              {/*ปิดข้อมูลปรับแต่งโปรไฟล์*/}
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <Link to="/admindashboard">
                <ListItemText primary="โหมดผู้ดูแล" />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <Link to="/">
                <ListItemText primary="กลับหน้าแรก" />
              </Link>
            </ListItemButton>
          </List>
        </Drawer>
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
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
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
