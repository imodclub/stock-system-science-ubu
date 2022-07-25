import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { GetAuth } from '../../services/firebase'
import {signOut} from 'firebase/auth'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AddOrUpdateUser from '../usersDashboard/AddOrUpdateProfile';
import DataUser from './CURD';
import Deposits from './Deposits';





function handleSingOut() {
  signOut(GetAuth).then(() => {
    alert("ออกจากระบบสำเร็จ")
  }).catch((error) => {
    alert("ไม่สามารถออกจากระบบได้")
  })
}

//ทดสอบจัดการปิดเปิดฟอร์มจากเพลิสย์
const listItemSteps = ["Dashboard", "AddList", "UserManage"]

export const ListContent=(list)=> {
  switch (list) {
    case 0:
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 340,
                justifyContent: 'flex-end',
              }}
            >
              <DataUser />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
                justifyContent: 'flex-end',
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 600,
                justifyContent: 'flex-end',
              }}
            >
              <AddOrUpdateUser />
            </Paper>
          </Grid>
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 340,
                justifyContent: 'flex-end',
              }}
            >
              <DataUser />
            </Paper>
          </Grid>
        </React.Fragment>
      );
    case 2:
      return (
        <React.Fragment>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 540,
                justifyContent: 'flex-end',
              }}
            >
              <AddOrUpdateUser />
            </Paper>
          </Grid>
        </React.Fragment>
      );
    default:
      throw new Error('Unknown step');
  }
}



  //ทดสอบคลิ๊ก list
  const listClickDashboard = () => {
    ListContent(0);
  };
  const listClickAddList = () => {
    ListContent(1);
  };
  const listClickUserManage = () => {
    ListContent(2);
  };
  const listClickChart = () => {
    ListContent(3);
  };
  



export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText
        primary="Dashboard"
        onClick={(e) => listClickDashboard()}
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText
        primary="เพิ่มรายการ"
        onClick={(e) => listClickAddList()}
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText
        primary="จัดการ User"
        onClick={(e) => listClickUserManage()}
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText onClick={(e) => handleSingOut()} primary="ออกจากระบบ" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link href="/homeuser">
        <ListItemText primary="โหมดผู้ใช้งาน" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link href="/">
        <ListItemText primary="กลับหน้าแรก" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);
