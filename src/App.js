
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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} excat></Route>
          <Route
            path="homeuser"
            element={user ? <HomeUser user={user} /> : <Login />}
          ></Route>
          <Route path="profileuser" element={<ProfileUser />}></Route>
          <Route path="Login" element={<Login />}></Route>
        </Routes>

        <UserContext.Provider value={user}>{}</UserContext.Provider>
      </BrowserRouter>
    </div>
  );
      
}

export default App;
