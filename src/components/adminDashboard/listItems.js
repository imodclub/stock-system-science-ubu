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
import { Link } from 'react-router-dom';
import PurchaseFormDialog from './PurchaseFormDialog'



function handleSingOut() {
  signOut(GetAuth).then(() => {
    alert("ออกจากระบบสำเร็จ")
  }).catch((error) => {
    alert("ไม่สามารถออกจากระบบได้")
  })
}

function testClick() {
  const items = "ทดสอบคลิ๊ก"
  this.props.getItem(items)

  console.log("ทดสอบคลิ๊ก")
}


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="เพิ่มรายการ" onClick={PurchaseFormDialog} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="จัดการ User" onClick={testClick} />
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
      <ListItemText
        onClick={(e) => handleSingOut()}
        primary="ออกจากระบบ"
      />
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
      <Link to="/homeuser">
        <ListItemText primary="โหมดผู้ใช้งาน" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link to="/">
        <ListItemText primary="กลับหน้าแรก" />
      </Link>
    </ListItemButton>
  </React.Fragment>
);
