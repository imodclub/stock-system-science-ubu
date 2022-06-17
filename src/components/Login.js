import { signInWithGoogle } from '../services/firebase';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Login() {
  return (
    <>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs></Grid>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              height="140"
              image="../images/LogoForCardSingIn.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                กรุณาเข้าสู่ระบบ
              </Typography>
              <Typography variant="h5" component="div">
                App Computer service from faculty of Science UBU
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
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
