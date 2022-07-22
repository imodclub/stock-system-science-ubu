import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';

import Grid from '@mui/material/Grid';
import Typography  from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



//context and database
import { useContext } from 'react';
import AuthContext from '../auth/Auth';
import { GetAuth, db, auth } from '../../services/firebase';
import { collection, addDoc, getDocs,query,where } from 'firebase/firestore';
import { signOut } from 'firebase/auth';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function AddOrUpdate() {
  const { Currentemail, displayname, uid, role } = useContext(AuthContext);

  const [name, setName] = React.useState(null);
  const [lastname, setLastname] = React.useState(null);
  const [position, setPosition] = React.useState(null);
  const [departments, setDepartments] = React.useState(null);
  const [telOfUBU, setTelOfUBU] = React.useState(null);
  const [telPrivate, setTelPrivate] = React.useState(null);
  const [social, setSocial] = React.useState(null);
  const [errors, setErrors] = React.useState(false);

  //อ่านข้อมูลจากฐานข้อมูล
  React.useEffect(() => {
    const findUserName = async () => {
      const q = query(
        collection(db, 'User'),
        where('Email', '==', Currentemail)
      );
      const docSnap = await getDocs(q);
      docSnap.forEach((doc) => {
        if (
          Currentemail === doc.data().Email.Currentemail ||
          doc.data().Email
        ) {
          setName(doc.data().Name);
          setLastname(doc.data().LastName);
          setDepartments(doc.data().Departments);
          setPosition(doc.data().Position);
          setTelOfUBU(doc.data().TelOfUBU);
          setTelPrivate(doc.data().TelPrivate);
          setSocial(doc.data().Social);
        }
      });
    };
    findUserName();
  }, []);

  //เช็คค่าจาก input text ว่ามีการส่งค่ามาจากฟอร์มหรือไม่
  React.useEffect(() => {
    const validate =
      name?.trim().length > 0 &&
      lastname?.trim().length > 0 &&
      departments?.trim().length > 0 &&
      telOfUBU;

    if (validate) {
      setErrors(true);
    } else {
      setErrors(false);
    }
  }, [name, lastname, position, departments, telOfUBU]);

  
    
    const handleChangeName = (e) => {
    setName(e);
  };

  const handleChangeLastname = (e) => {
    setLastname(e);
  };
  const handleChangePosition = (e) => {
    setPosition(e);
  };
  const handleChangeDepartments = (e) => {
    setDepartments(e);
  };
  const handleChangeTelOfUBU = (e) => {
    setTelOfUBU(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Typography mt={2} variant="h4" component="h4">
        จัดการข้อมูล
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            autoComplete="given-name"
            fullWidth
            id="Name"
            label={name ? name : 'ชื่อ'}
            autoFocus
            onChange={(event) => handleChangeName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="Lastname"
            label={lastname ? lastname : 'นามสกุล'}
            autoComplete="family-name"
            onChange={(event) => handleChangeLastname(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="Departments"
            label={departments ? departments : 'ภาควิชา/แผนก'}
            onChange={(event) => handleChangeDepartments(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label={position ? position : 'ตำแหน่ง'}
            id="Position"
            onChange={(event) => handleChangePosition(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id={telOfUBU ? telOfUBU : 'TelOfUBU'}
            label="โทรศัพท์ภายใน"
            onChange={(event) => handleChangeTelOfUBU(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            id="TelPrivate"
            label={telPrivate ? telPrivate : 'โทรศัพท์ที่ติดต่อได้ (ไม่บังคับ)'}
            onChange={(event) => setTelPrivate(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label={
              social
                ? social
                : 'ช่องทางการติดต่ออื่น เช่น Line, Facebook (ไม่บังคับ)'
            }
            id="Social"
            onChange={(event) => setSocial(event.target.value)}
          />
        </Grid>
        <p></p>
        <Button disabled={!errors} onClick={handleSubmit}>
          เพิ่ม หรือ เปลี่ยนแปลงข้อมูล
        </Button>
      </Grid>
    </React.Fragment>
  );
}

export default function AddOrUpdateUser() {
  return <AddOrUpdate />;
}
