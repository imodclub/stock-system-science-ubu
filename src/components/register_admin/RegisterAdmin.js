import React, { useState,useEffect } from 'react';
import { GetAuth, db } from './../../services/firebase'
import { createUserAdmin }  from './../../services/firebase'
import { collection,addDoc} from 'firebase/firestore'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import firebase from './../../services/firebase';
import { Navigate } from 'react-router'

/*Alert */
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import { Link } from 'react-router-dom'




const RegisterAdmin = () => {
  const [alert, setAlert] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)
  const [lastname, setLastname] = useState(null)
  const [position, setPosition] = useState(null);
  const [departments, setDepartments] = useState(null);

   const successAlert = () => {
     setAlert(!alert);
   };

      const handleSubmit = async(e) => {
        e.preventDefault();
              const Auth = GetAuth;
        await createUserWithEmailAndPassword(Auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        addDoc(collection(db, 'UserAdmin'), {
          Email:email,
          Name: name,
          LastName: lastname,
          Position: position,
          Departments: departments,
          Role: 'admin',
        });

        setEmail('')
        setPassword('')
        setName('')
        setLastname('')
        setPosition('')
        setDepartments('')
        successAlert()
      }


 

  return (
    <>
      <Dialog open={alert} onClose={successAlert}>
        <Alert icon={false} severity="success">
          ลงทะเบียนผู้ดูแลสำเร็จ
          <p>
            <Link to="/admindashboard">ไปหน้า Admin Dashboard</Link>
          </p>
        </Alert>
      </Dialog>
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
                  name="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  variant="outlined"
                  name="Password"
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="name"
                  label="ชื่อผู้ใช้"
                  variant="outlined"
                  name="Name"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="lastname"
                  label="นามสกุล"
                  variant="outlined"
                  name="Lastname"
                  onChange={(event) => setLastname(event.target.value)}
                  value={lastname}
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="position"
                  label="ตำแหน่ง"
                  variant="outlined"
                  name="Position"
                  onChange={(event) => setPosition(event.target.value)}
                  value={position}
                />
              </CardActions>
              <CardActions>
                <TextField
                  fullWidth
                  id="departments"
                  label="แผนก"
                  variant="outlined"
                  name="Departments"
                  onChange={(event) => setDepartments(event.target.value)}
                  value={departments}
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
