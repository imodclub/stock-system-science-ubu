import React, { Fragment, useEffect, useState } from 'react'
import { Table,TableCell,TableRow,TableHead,TableBody,TableContainer,Button, Typography,Grid } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { GetAuth, db } from '../../services/firebase';


function MaterialsList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);

  const ReadData = async () => {
    const docData = [];
    const querySnapshort = await getDocs(collection(db, 'Material'));
    querySnapshort.forEach((doc) => {
      docData.push({ ...doc.data(), key: doc.id });
      setData(docData);
    });
  }
    useEffect(() => {
      ReadData();
      setData([])
    }, []);
  
    return (
      <Fragment>
        <Grid item xs={12}>
          <TableContainer>
            <Typography variant="h6" sx={{ p: 2 }}>
              รายการวัสดุ
            </Typography>

            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">ชื่อรายการ</TableCell>
                  <TableCell align="left">ประเภท</TableCell>
                  <TableCell align="left">ยี่ห้อ</TableCell>
                  <TableCell align="left">หน่วย</TableCell>
                  <TableCell align="left">ราคาต่อหน่วย</TableCell>
                  <TableCell align="left">รายละเอียด</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.NameMaterial}</TableCell>
                    <TableCell align="left">{row.Categories}</TableCell>
                    <TableCell align="left">{row.NameBrand}</TableCell>
                    <TableCell align="left">{row.Unit}</TableCell>
                    <TableCell align="left">{row.PriceOfUnit}</TableCell>
                    <TableCell align="left">{row.Detail}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Fragment>
    );
};

export default MaterialsList