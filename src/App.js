import { useState, useEffect,useContext } from 'react';
import Login from './components/Login';
import HomeUser from './components/HomeUser';
import firebase from './services/firebase';
import ProfileUser from './components/ProfileUser';
import RegisterAdmin from './components/RegisterAdmin';
import RegisterProfileAdmin from './components/Layout/RegisterProfileAdminForm';
import SignOut from './components/Layout/SignOut';
import Index from './components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from './components/Auth/Auth'

function App() {
 const [user, setUser] = useState(null);
  //check user local storage
import React, { Fragment, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> parent of 84965a3 (check router)

=======
>>>>>>> parent of 82e7f92 (Add user button)
import Appbar from './components/Appbar'
import { Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Copyright from './components/copyright/Copyright';
import AuthContext from './components/auth/Auth';


function App() {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)


<<<<<<< HEAD

 //check user local storage
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AuthContext.Provider value={user}>
          <Routes>
            <Route path="/" element={<Index />} excat></Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
=======

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
      <AuthContext.Provider>
        <CssBaseline />
        <Appbar user={user} />
        <Container>
<h1>Test reset git</h1>
        </Container>
        <Copyright />
      </AuthContext.Provider>
    </Fragment>
>>>>>>> parent of 84965a3 (check router)
  );
}

export default App;
