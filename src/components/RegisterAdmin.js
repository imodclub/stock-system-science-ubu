import React, { useState } from 'react';
import { GetAuth,setDoc,db } from '../services/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { collection, connectFirestoreEmulator } from 'firebase/firestore';



const RegisterAdmin = () => {
      const [currentUserAdmin, setCurrentUserAdmin] = useState(null);
      const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name, lastname, position, departments } = e.target.elements
        const Auth = GetAuth
        createUserWithEmailAndPassword(Auth, email.value, password.value)
          .then  
          ((userCredential) => {
            const user = userCredential
            setCurrentUserAdmin = user
            
          })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            })
        setDoc(collection(db, 'UserAdmin'), {

          name: name,
          lastname: lastname,
          position: position,
          departments:departments
        })
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
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs>
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
                <TextField
                  fullWidth
                  id="Name"
                  label="ชื่อผู้ใช้"
                  variant="outlined"
                  name="Name"
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="LastName"
                  label="นามสกุล"
                  variant="outlined"
                  name="LastName"
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="Position"
                  label="ตำแหน่ง"
                  variant="outlined"
                  name="Position"
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="Departments"
                  label="แผนก"
                  variant="outlined"
                  name="Departments"
                />
              </CardActions>

              <CardActions>
                <Button type="submit" variant="contained" size="large">
                  สร้างบัญชี
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}




export default RegisterAdmin
