import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid, TextField, Box, Pape, CssBaseline, Container,Alert,AlertTitle } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { teal } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Autocomplete from '@mui/material/Autocomplete';

import  ProgressLoading from './ProgessLoading'

//servie and database
import { db } from '../../../services/firebase'
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
import { useRef } from 'react';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const options = ["เลือกภาควิชา","เคมี", "ฟิสิกส์", "วิทยาศาสตร์ชีวภาพ", "คณิตศาสตร์ สถิติและคอมพิวเตอร์", "สำนักงานเลขานุการ"]



export default function AddUser() {
  const [open, setOpen] = React.useState(false);
  const [validatorForm, setValidatorForm] = React.useState(false);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [alert, setAlert] = React.useState(false);

  const textInputName = React.useRef(null);
  const textInputLastname = React.useRef(null);
  const textInputDepartments = React.useRef(null);
  const textInputPosition = React.useRef(null);
  const textInputEmail = React.useRef(null);
  const textInputTelOfUBU = React.useRef(null);
  const textInputTelPrivate = React.useRef(null);
  const textInputSocial = React.useRef(null);

  const [name, setName] = React.useState(null);
  const [lastname, setLastname] = React.useState(null);
  const [position, setPosition] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [departments, setDepartments] = React.useState(null);
  const [telOfUBU, setTelOfUBU] = React.useState(null);
  const [telPrivate, setTelPrivate] = React.useState(null);
  const [social, setSocial] = React.useState(null);

  //hook data
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  //validate form
  React.useEffect(() => {
    const validate =
      name?.trim().length > 0 &&
      lastname?.trim().length > 0 &&
      departments?.trim().length > 0 &&
      telOfUBU;

    if (validate) {
      setValidatorForm(true);
    } else {
      setValidatorForm(false);
    }
  }, [name, lastname, position, departments, telOfUBU]);

  const PrepareData = async () => {
    try {
      setLoading(true);
      setErrors(null);
      setData(null);
      const docRef = await addDoc(collection(db, 'User'), {
        Name: name,
        Lastname: lastname,
        Departments: departments,
        Email: email,
        Position: position,
        TelOfUBU: telOfUBU,
        TelPrivate: telPrivate,
        Tocial: social,
        DateCreate: serverTimestamp(),
        Role:"user"
      });
    } catch (err) {
      setErrors(err.toString());
    } finally {
      setLoading(false);
      
        setAlert(true)
      
      setTimeout(() => {
         <ProgressLoading />
        window.location.reload();
      },4500);
    }
  };

  
  //บันทึกข้อมูล
  const handleSave = async (e) => {
    e.preventDefault();
    PrepareData();
    
    
  };
  //จบ บันทึกข้อมูล

  const handleClear = () => {
    textInputName.current.value = '';
    textInputLastname.current.value = '';
    textInputDepartments.current.value = 'เลือกภาควิชา';
    textInputPosition.current.value = '';
    textInputEmail.current.value = '';
    textInputTelOfUBU.current.value = '';
    textInputTelPrivate.current.value = '';
    textInputSocial.current.value = '';
  };

  const theme = createTheme();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<PersonAddAltIcon />}
            onClick={handleClickOpen}
          >
            เพิ่มผู้ใช้งาน
          </Button>
        </Stack>

        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                เพิ่มผู้ใช้งาน
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClear}>
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  ล้างข้อมูล
                </Typography>
              </Button>
              <Button
                autoFocus
                color="inherit"
                disabled={!validatorForm}
                onClick={handleSave}
              >
                <Typography
                  sx={{ ml: 2, flex: 1 }}
                  variant="h6"
                  component="div"
                >
                  บันทึก
                </Typography>
              </Button>
            </Toolbar>
          </AppBar>

          {/**Alert */}
          {alert ? (
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="success">
                <AlertTitle>[บันทึกข้อมูลสำเร็จ]</AlertTitle>
                บันทึกข้อมูลผู้ใช้งานสำเร็จ  — <strong>กำลังกลับสู่หน้าแรก</strong>
              </Alert>
            </Stack>
          ) : (
            <></>
          )}
          {/**Close Alert */}

          <Container component="main" maxWidth="xs">
            <Box
              component="form"
              noValidate
              onSubmit={handleSave}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    autoComplete="given-name"
                    fullWidth
                    inputRef={textInputName}
                    id="Name"
                    label="ชื่อ"
                    autoFocus
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    inputRef={textInputLastname}
                    id="Lastname"
                    label="นามสกุล"
                    autoComplete="family-name"
                    onChange={(event) => setLastname(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                      setDepartments(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    id="DepartmentsList"
                    options={options}
                    selectOnFocus
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        fullWidth
                        inputRef={textInputDepartments}
                        id="Departments"
                        label="เลือกภาควิชา"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    inputRef={textInputPosition}
                    label="ตำแหน่ง"
                    id="Position"
                    onChange={(event) => setPosition(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    inputRef={textInputEmail}
                    label="Email"
                    id="Email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    inputRef={textInputTelOfUBU}
                    id="TelOfUBU"
                    label="โทรศัพท์ภายใน"
                    onChange={(event) => setTelOfUBU(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    inputRef={textInputTelPrivate}
                    id="TelPrivate"
                    label="โทรศัพท์ที่ติดต่อได้ (ไม่บังคับ)"
                    onChange={(event) => setTelPrivate(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    inputRef={textInputSocial}
                    label="ช่องทางการติดต่ออื่น เช่น Line, Facebook (ไม่บังคับ)"
                    id="Social"
                    onChange={(event) => setSocial(event.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Dialog>
      </ThemeProvider>
    </React.Fragment>
  );
}
