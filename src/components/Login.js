import { signInWithGoogle } from '../services/firebase';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'


function Login() {
  return (
    <>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Stock Science UBU App
              </Typography>
              <Typography variant="h5" component="div">
                กรุณาเข้าสู่ระบบ
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" onClick={signInWithGoogle}>
                Sign in with google
              </Button>
            </CardActions>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Login;
