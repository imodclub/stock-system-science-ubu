import React, { useState,useEffect } from 'react';
import { GetAuth, db } from './../../services/firebase'
import { collection,addDoc} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import firebase from './../../services/firebase';



const RegisterAdmin = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser]=useState(null)
  const [uid, setUid,email,setEmail] = useState(null);
      const handleSubmit = async(e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const { name, lastname, position, departments } = e.target.elements;
        const Auth = GetAuth;
        await createUserWithEmailAndPassword(Auth, email.value, password.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setCurrentUser = user
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      
        addDoc(collection(db, 'UserAdmin'), {
          Email: email,
          Uid: uid,
          Name: name.value,
          LastName: lastname.value,
          Position: position.value,
          Departments: departments.value,
          Rule: 'admin',
        });
  }
     useEffect(() => {
       firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           setUser(user);
           setUid = user.uid;
           setEmail = user.email;
         } else {
           console.log('ไม่สามารถอ่านข้อมูลจาก Register admin pages ได้');
         }
       });
     }, []);
  
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
                  id="lastname"
                  label="นามสกุล"
                  variant="outlined"
                  name="lastname"
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
