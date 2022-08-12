import React, { Fragment } from 'react'
import firebase from 'firebase/compat/app';

import Appbar from './components/Appbar'

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

  return (
    <Fragment>
      <Appbar body="ทดสอบส่ง props ในปุ่ม Home"  />
    </Fragment>
  )
}

export default App