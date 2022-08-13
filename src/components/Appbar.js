import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  IconButton,
  Tooltip,
} from '@mui/material';
import { MenuIcon, AdbIcon, SignalWifi0BarOutlined } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SignIn from './SignIn';
import SignOut from './SignOut'

const theme = createTheme({
  palette: {
    white: {
      primary: {
        main: '#f5f5f5',
      },
    },
  },
});

function Appbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [singninMenu, setSigninMenu] = React.useState(false);
  const [num, setNum]=React.useState(0)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    
  };
    const handleHomeMenu = (event) => {
       setLoading(true)
    }
    
       const handleSigninMenu = (event) => {
         setSigninMenu(true);
       };

  function appbarPage(num) {
    switch (num) {
      case 0:
        return (
          <React.Fragment>
            <></>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <></>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <></>
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <></>
          </React.Fragment>
        );
      case 4:
        if (props.user) {
          return (
            <React.Fragment>
              <SignOut />
            </React.Fragment>
          )
        } else {
          return (
            <React.Fragment>
              <SignIn />
            </React.Fragment>
          )
        }
      default:
        throw new Error('Unknow step');
    }
  }


  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="white">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                justifyContent="center"
                alignItems="center"
              >
                <Tooltip title="Home">
                  <IconButton
                    onClick={(e)=>{setNum(0)}}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <HomeIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="จัดการผู้ใช้">
                  <IconButton
                    onClick={(e)=>{setNum(1)}}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <PersonIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="จัดการสินค้าและวัสดุ">
                  <IconButton
                    onClick={(e)=>{setNum(2)}}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <ShoppingCartIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="รายงาน">
                  <IconButton
                    onClick={(e)=>{setNum(3)}}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <AssessmentIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="เข้าสู่ระบบ">
                  <IconButton
                    onClick={(e) => {
                      setNum(4);
                    }}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <VpnKeyIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <h5>{props.user}</h5>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {appbarPage(num)}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Appbar;
