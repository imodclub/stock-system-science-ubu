import * as React from 'react';

//service and database
import firebase from '../../services/firebase';
import { GetAuth, db } from '../../services/firebase';
import { collection, getDocs,where } from 'firebase/firestore';

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




const ReadDataUser = () => {
  const [data, setData] = React.useState([]);
  const [dataOnClick, setDataOnClick] = React.useState(null)

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


  //Delete User
  const handleClickDelete = async (id) => {
    console.log("id documents ",id)
    const checkIdUserFromCollection = await getDocs(collection(db, 'User'), where('id', '==', 'id'));
    checkIdUserFromCollection.forEach((doc => {
    console.log("user id ",doc.data().UID)
    }))
  }

  React.useEffect(() => {
    handleClickDelete();
  },[])
  
  

  return (
    <div>
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
                    >
                      แก้ไข
                    </Button>
                    <Button
                      variant="contained"
                      endIcon={<DeleteIcon />}
                      color="error"
                      onClick={()=>{handleClickDelete(row.key)}}>
                      ลบ
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReadDataUser;
