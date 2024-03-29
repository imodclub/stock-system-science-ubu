import React, { useState } from 'react';
import { GetAuth } from '../services/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import RegigterProfileAdminForm from './Layout/RegisterProfileAdminForm'
import {Redirect} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {doc, setDoc} from 'firebase/firestore'
import { async } from '@firebase/util';




const RegisterAdmin = () => {
  const [currentUserAdmin, setCurrentUserAdmin] = useState(null);
  const [currentUID, setCurrentUID] = useState(null);
  const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements
        const Auth = GetAuth
        createUserWithEmailAndPassword(Auth, email.value, password.value)
          .then          
          ((result) => {
            console.log(result.user.uid);
            setCurrentUID = result.user.uid
           
          })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            })
     if (currentUID) {
     }
  }
 
  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs="auto">
              <CardContent sx={{ maxWidth: 345 }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Stock Science UBU App
                </Typography>
                <Typography variant="h5" component="div">
                  ลงทะเบียน
                </Typography>
              </CardContent>
              <CardActions>
                <TextField
                  fullWidth
                  id="Email"
                  label="Email"
                  variant="outlined"
                  name="email"
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  variant="outlined"
                  name="password"
                  type="password"
                />
              </CardActions>
              <CardActions>
                <Button type="submit" variant="contained" size="large">
                  สร้างบัญชี
                </Button>
              </CardActions>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs></Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}




export default RegisterAdmin
