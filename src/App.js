import React, { Fragment, useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import PageMain from './pages/PageMain'
import Footer from './components/Footer';

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
      <AuthContext.Provider value={user} >
        <CssBaseline />
        <Appbar user={user} />
        <Container>
          <PageMain />
        </Container>
        <Footer />
      </AuthContext.Provider>
    </Fragment>
  );
}

export default App