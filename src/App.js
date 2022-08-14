import React, { Fragment, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'


import Appbar from './components/Appbar'
import { Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Copyright from './components/copyright/Copyright';
import AuthContext from './components/auth/Auth';


function App() {
 

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
      <AuthContext.Provider>
        <CssBaseline />
        <Appbar user={user} />
        <Container>

        </Container>
        <Copyright />
      </AuthContext.Provider>
    </Fragment>
  );
}

export default App