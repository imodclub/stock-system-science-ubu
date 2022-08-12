import React, { Fragment, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth'

import Appbar from './components/Appbar'
import { Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { CurrencyYenTwoTone } from '@mui/icons-material';


function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAo2KbSE7kaxH-__s5XTImyPWxlBuT27mQ',
    authDomain: 'stock-240b7.firebaseapp.com',
    projectId: 'stock-240b7',
    storageBucket: 'stock-240b7.appspot.com',
    messagingSenderId: '1094516188928',
    appId: '1:1094516188928:web:bf6ad4775626af2a4af5e5',
    measurementId: 'G-1V5E1JVNZE',
  };
  firebase.initializeApp(firebaseConfig);

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)



 //check user local storage
  useEffect(() => {
    getAuth().onAuthStateChanged((authUser) => {
      setLoading(false)
      if (authUser) {
        setUser(authUser.email)
        setLoading(true)
      } else {
        setUser(null)
      }
    })
  },[])


  return (
    <Fragment>
      <CssBaseline />
      <Appbar user={user} />
      <Container></Container>
    </Fragment>
  );
}

export default App