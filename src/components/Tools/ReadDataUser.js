import * as React from 'react';
import firebase from '../../services/firebase';
import { GetAuth, db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    UserID,
    Name,
    Lastname,
    Email,
    Role

) {
    return {UserID,Name,Lastname,Email,Role}
}

const ReadDataUser = () => {
    const [data, setData] = React.useState([null]);
    const [docID, setDocID] = React.useState([])
    

      const ReadData = async () => {
      const querySnapshort = await getDocs(collection(db, 'User'));
      querySnapshort.forEach((doc) => {
        //console.log(doc.id, ' => ', doc.data())
         var docData = {
          uid: doc.id,
          name: doc.data().Name,
          lastname: doc.data().Lastname,
          email: doc.data().Email,
          role: doc.data().Role,
        };

        //setDocID(doc.id)
        setData(docData);
      });
    };
    

    React.useEffect(() => {
            ReadData();   
},[])
   
    const rows = [
      createData(data.uid, data.name, data.lastname, data.email, data.role),
      ];

   
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>UID</TableCell>
              <TableCell align="left">ชื่อ</TableCell>
              <TableCell align="left">นามสกุล</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">ระดับ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.UserID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.UserID}
                </TableCell>
                <TableCell align="left">{row.Name}</TableCell>
                <TableCell align="left">{row.Lastname}</TableCell>
                <TableCell align="left">{row.Email}</TableCell>
                <TableCell align="left">{row.Role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ReadDataUser