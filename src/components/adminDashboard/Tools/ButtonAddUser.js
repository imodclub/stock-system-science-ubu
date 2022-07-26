import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid, TextField, Box, Pape, CssBaseline, Container } from '@mui/material'
import {createTheme,ThemeProvider} from '@mui/material/styles'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddUser() {
  const [open, setOpen] = React.useState(false);
   const [name, setName] = React.useState(null);
   const [lastname, setLastname] = React.useState(null);
   const [position, setPosition] = React.useState(null);
   const [departments, setDepartments] = React.useState(null);
   const [telOfUBU, setTelOfUBU] = React.useState(null);
   const [telPrivate, setTelPrivate] = React.useState(null);
   const [social, setSocial] = React.useState(null);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  };

  const handleChangeName = (e) => {
    setName(e);
  };

  const handleChangeLastname = (e) => {
    setLastname(e);
  };
  const handleChangePosition = (e) => {
    setPosition(e);
  };
  const handleChangeDepartments = (e) => {
    setDepartments(e);
  };
  const handleChangeTelOfUBU = (e) => {
    setTelOfUBU(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const theme = createTheme();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<PersonAddAltIcon />}
            onClick={handleClickOpen}
          >
            เพิ่มผู้ใช้งาน
          </Button>
        </Stack>

        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                เพิ่มผู้ใช้งาน
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                บันทึก
              </Button>
            </Toolbar>
          </AppBar>

          <Container component="main" maxWidth="xs">
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    autoComplete="given-name"
                    fullWidth
                    id="Name"
                    label={name ? name : 'ชื่อ'}
                    autoFocus
                    onChange={(event) => handleChangeName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Lastname"
                    label={lastname ? lastname : 'นามสกุล'}
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
                    label={departments ? departments : 'ภาควิชา/แผนก'}
                    onChange={(event) =>
                      handleChangeDepartments(event.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label={position ? position : 'ตำแหน่ง'}
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
                    id={telOfUBU ? telOfUBU : 'TelOfUBU'}
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
                    label={
                      telPrivate
                        ? telPrivate
                        : 'โทรศัพท์ที่ติดต่อได้ (ไม่บังคับ)'
                    }
                    onChange={(event) => setTelPrivate(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label={
                      social
                        ? social
                        : 'ช่องทางการติดต่ออื่น เช่น Line, Facebook (ไม่บังคับ)'
                    }
                    id="Social"
                    onChange={(event) => setSocial(event.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Dialog>
      </ThemeProvider>
    </React.Fragment>
  );
}
