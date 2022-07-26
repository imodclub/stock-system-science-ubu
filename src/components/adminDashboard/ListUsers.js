import * as React from 'react';

//service and database
import firebase from '../../services/firebase';
import { GetAuth, db } from '../../services/firebase';
import { collection, doc, deleteDoc, getDocs, where } from 'firebase/firestore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { keys } from '@mui/system';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';


import ButtonAddUsers from './Tools/ButtonAddUser';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ListUsers = () => {
  const [data, setData] = React.useState([]);
  const [dataOnClick, setDataOnClick] = React.useState(null);
  const [getValue, setGetValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Read Data to Table list user
  const ReadData = async () => {
    const docData = [];
    const querySnapshort = await getDocs(collection(db, 'User'));
    querySnapshort.forEach((doc) => {
      //console.log(doc.id, ' => ', doc.data())
      docData.push({ ...doc.data(), key: doc.id });
      //setDocID(doc.id)
      setData(docData);
    });
  };
  React.useEffect(() => {
    ReadData();
  }, []);
  //Read Data to Table list user

  //Edit user from button
  const EditUser = () => {};

  //Delete User
  const handleClickDelete = async (id) => {
    var dataID;
    const checkIdUserFromCollection = await getDocs(
      collection(db, 'User'),
      where('id', '==', id)
    );
    checkIdUserFromCollection.forEach((doc) => {
      if (doc.id == id) {
        dataID = doc.id;
        console.log('id documents ', doc.id);
        setDataOnClick(doc.data().UID);
      }
    });
    if (dataID) {
      console.log('data id คือ ', dataID);

      await deleteDoc(doc(db, 'User', dataID));
    }
  };
  return (
    <React.Fragment>
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
              แก้ไขข้อมูล
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              บันทึกข้อมูลแก้ไข
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
        <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="ระบุชื่อ"
            defaultValue="ชื่อ"
          />
          <TextField
            required
            id="outlined-required"
            label="นามสกุล"
            defaultValue="นามสกุล"
          />
        </Box>
      </Dialog>
      <Grid item xs={12}>
        <TableContainer>
          <Typography variant="h6" sx={{ p: 2 }}>
            ข้อมูลผู้ใช้งาน
          </Typography>

          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align="left">ชื่อ</TableCell>
                <TableCell align="left">นามสกุล</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">ระดับ</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.key}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">{row.Name}</TableCell>
                  <TableCell align="left">{row.Lastname}</TableCell>
                  <TableCell align="left">{row.Email}</TableCell>
                  <TableCell align="left">{row.Role}</TableCell>
                  <TableCell align="left">
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        color="warning"
                        onClick={handleClickOpen}
                      >
                        แก้ไข
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<DeleteIcon />}
                        color="error"
                        onClick={() => {
                          handleClickDelete(row.key);
                        }}
                      >
                        ลบ
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      
    </React.Fragment>
  );
};

export default ListUsers;
