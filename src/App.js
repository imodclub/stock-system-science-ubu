
import { useState, useEffect} from 'react';
import Login from './components/Login'
import HomeUser from './components/HomeUser'
import firebase from './services/firebase';
import ProfileUser from './components/ProfileUser';
import Index from './components/Index';
import UserContext from './dataContext/userContext';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null)
  
  //check user local storage
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <Routes>
            <Route path="/" element={<Index />} excat></Route>
            <Route
              path="homeuser"
              element={user ? <HomeUser user={user} /> : <Login />}
            ></Route>
            <Route path="profileuser" element={<ProfileUser />}></Route>
            <Route
              path="Login"
              element={user ? <HomeUser user={user} /> : <Login />}
            ></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
      
}

export default App;
