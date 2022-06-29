import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import  CssBaseline  from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { TypeAction, Container, Typography, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
            {'Copyright '}
            <Link colr="inherit" href="https://mui.com">
                Your Website
            </Link>
            {new Date().getFullYear()}
            {'.'}
      </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        console.log({
            name: data.get('name'),
            lastname: data.get('lastname'),
            position: data.get('position'),
            departments: data.get('departments')
        });
    };
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ลงทะเบียนเจ้าหน้าที่
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="ชื่อผู้ใช้งาน"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="นามสกุลผู้ใช้งาน"
                name="lastname"
                autoComplete="lastname"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="position"
                label="ตำแหน่งงาน"
                name="position"
                autoComplete="position"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="departments"
                label="แผนก"
                name="departments"
                autoComplete="departments"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ลงทะเบียน
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password ?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have and account ? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
}