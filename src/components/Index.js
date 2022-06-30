import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import {styled} from '@mui/material/styles'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ButtonBase, Typography } from '@mui/material';
import imagePicture from '../images/indexPicture.png'
import  AuthContext from './Auth/Auth';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


function IndexPages({ children }) {
  const user = useContext(AuthContext)
  console.log(user)
  
  return (
    <div>
      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          marginTop:5,
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128, marginTop:3}}>
              <Img alt="complex" src={imagePicture} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <h1>Stock Science UBU App</h1>
                  <h3>
                    <Link to="/login">Go to Login</Link>
                    {`${user.email}`}
                  </h3>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
     
    </div>
  );
}

export default IndexPages