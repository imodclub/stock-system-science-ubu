import { auth } from '../../services/firebase';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function SignOut() {
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
                ออกจากระบบ
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="large" onClick={auth.signOut}>
                Sign out
              </Button>
            </CardActions>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SignOut;
