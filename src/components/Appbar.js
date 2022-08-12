import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  IconButton,
  Tooltip,
} from '@mui/material';
import { MenuIcon, AdbIcon } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Signin from './signin/Signin';
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
    const [singninMenu, setSigninMenu] = React.useState(false)

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
                    onClick={handleHomeMenu}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <HomeIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="จัดการผู้ใช้">
                  <IconButton
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <PersonIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="จัดการสินค้าและวัสดุ">
                  <IconButton
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <ShoppingCartIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="รายงาน">
                  <IconButton
                    onClick={handleSigninMenu}
                    sx={{ my: 2, color: 'primary', display: 'block' }}
                    color="primary"
                  >
                    <AssessmentIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="เข้าสู่ระบบ">
                  <IconButton
                    onClick={handleSigninMenu}
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
        
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Appbar;
