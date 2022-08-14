import React, { Fragment } from 'react'
import Box from '@mui/material/Box'
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function ButtonAddUser() {
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
        >
          เพิ่มข้อมูลผู้ใช้งาน
        </Button>
      </Box>
    </Fragment>
  );
}

export default ButtonAddUser