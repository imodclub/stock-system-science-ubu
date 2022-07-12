import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>โปรไฟล์ผู้ใช้</Title>
      <Typography component="p" variant="h4">
        คุณ กมล คำพิบูลย์
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        ตำแหน่ง ช่างเครื่องคอมพิวเตอร์
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
