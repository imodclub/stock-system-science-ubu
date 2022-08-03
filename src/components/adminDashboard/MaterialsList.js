import React, { Fragment } from 'react'
import { Table,TableCell,TableRow,TableHead,TableBody,TableContainer,Button, Typography,Grid } from '@mui/material';

function MaterialsList() {
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
                  <TableCell align="left">รายละเอียด</TableCell>
                  <TableCell align="left">ราคา</TableCell>
                  <TableCell align="left">จำนวนคงเหลือ</TableCell>
                </TableRow>
              </TableHead>
              
            </Table>
          </TableContainer>
        </Grid>
      </Fragment>
    );
}

export default MaterialsList