import React, { useContext, useState } from 'react'
import {styled} from '@mui/material/styles'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ButtonBase, Typography } from '@mui/material';
import imagePicture from '../images/indexPicture.png'
import Link from '@mui/material/Link';

import { UseContext } from 'react'
import AuthContext from './auth/Auth';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


function Home() {
  const { Currentemail, displayname, uid } = useContext(AuthContext);

  const welcome = () => {
    let text = "คุณอยู่ในสถานะลงชื่อเข้าใช้ ";
    let mergText = text + Currentemail
    return (mergText)
  }
  return (
    <div>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          marginTop: 5,
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128, marginTop: 5 }}>
              <Img alt="complex" src={imagePicture} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h1>Stock Science UBU</h1>

                  <Button variant="text" Link href="/signin">
                    Go to User Dashboard
                  </Button>
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                
                    <Button variant="text" Link href="/admindashboard">Go to Admin Dashboard</Button>
                
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h4>{Currentemail ? welcome() : ' '}</h4>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Home