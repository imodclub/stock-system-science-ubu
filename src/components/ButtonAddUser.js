import React, { Fragment, useState } from 'react'
import Box from '@mui/material/Box'
import {Link as RouterLink} from 'react-router-dom'
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddUsersForm from './AddUsersForm';

function ButtonAddUser() {
  function handleClick() {
    console.log("test")
    return (
      <Fragment>
        <h1>Test</h1>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: 50,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pr: 20,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          startIcon={<PersonAddIcon />}
          component={RouterLink}
          to="adduserform"
        >
          เพิ่มข้อมูลผู้ใช้งาน
        </Button>
      </Box>
    </Fragment>
  );
}

export default ButtonAddUser