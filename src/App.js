
import { useState, useEffect} from 'react';
import Login from './components/Login'
import HomeUser from './components/HomeUser'
import firebase from './services/firebase';
import ProfileUser from './components/ProfileUser';
import RegisterAdmin from './components/RegisterAdmin'
import RegisterProfileAdmin from './components/Layout/RegisterProfileAdminForm'
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
    <div>
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <Routes>
            <Route path="/" element={<Index />} excat></Route>
            <Route
              path="homeuser"
              element={user ? <HomeUser user={user} /> : <Index />}
            ></Route>
            <Route
              path="profileuser"
              element={<ProfileUser />}
            ></Route>
            <Route
              path="Login"
              element={user ? <HomeUser user={user} /> : <Login />}
            ></Route>
            <Route path='registeradmin' element={<RegisterAdmin />}></Route>
            <Route path='registerprofileadmin' element={<RegisterProfileAdmin />}></Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
      
}

export default App;
