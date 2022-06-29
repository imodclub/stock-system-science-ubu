import React, { useState } from 'react';
import { GetAuth, db } from '../services/firebase'
import { collection,setDoc} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const RegisterAdmin = () => {
      const [currentUser, setCurrentUser] = useState(null);
      const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name, lastname, position, departments } = e.target.elements
        const Auth = GetAuth
        createUserWithEmailAndPassword(Auth, email.value, password.value)
          .then  
          (() => {
            const regData = {
              Name: name,
              LastName: lastname,
              Position: position,
              Departments: departments,
              Rule: false
            }
            setDoc(collection(db, 'Emproyees',regData));

          })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
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
                  id="name"
                  label="ชื่อผู้ใช้"
                  variant="outlined"
                  name="name"
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  variant="outlined"
                  name="lastName"
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="position"
                  label="ตำแหน่ง"
                  variant="outlined"
                  name="position"
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="departments"
                  label="แผนก"
                  variant="outlined"
                  name="departments"
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
