import React, {useState} from 'react';
import firebaseConfig from '../services/firebase';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const RegisterAdmin = () => {
  

      const [currentUser, setCurrentUser] = useState(null);
      const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements
        try {
          firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value)
          setCurrentUser(true)
        } catch (error) {
            alert(error)
        }
      }
  return (
    <>
      <Container maxWidth="sm">
        <FormControl onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs="auto">
              <CardContent>
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
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </CardActions>
              <CardActions>
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </CardActions>
              <CardActions>
                <Button size="large">สร้างบัญชี</Button>
              </CardActions>
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs></Grid>
          </Grid>
        </FormControl>
      </Container>
    </>
  );
}




export default RegisterAdmin
