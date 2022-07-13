import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

import {useContext,useState} from 'react'
import AuthContext from '../auth/Auth';

import { collection,query,where, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase'



 


function preventDefault(event) {
  event.preventDefault();
}

export default function Profile() {
  const { Currentemail, displayname } = useContext(AuthContext);
  const [email, setEmail] = useState(Currentemail);
  const [username, setUsername] = useState(null);

  //ค้นหาอีเมลและเรียกชื่อผู้ใช้งาน
  const findUserName = async () => {
    const q = query(
      collection(db, 'UserAnother'),
      where('Email', '==', Currentemail)
    );
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      if (Currentemail === doc.data().Email) {
        console.log(doc.id, ' => ', doc.data());
      } else {
        console.log('ไม่พบค่า');
      }
    });
  };
  findUserName(Currentemail);

  return (
    <React.Fragment>
      <Title>โปรไฟล์ผู้ใช้</Title>
      <Typography component="p" variant="h4" key={email.id}>
        สวัสดีคุณ {email}
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
