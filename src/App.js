
import { useState, useEffect, useContext, createContext } from 'react';
import Login from './components/Login'
import HomeUser from './components/HomeUser'
import firebase from './services/firebase';
import ProfileUser from './components/ProfileUser'

const UserContext = createContext()

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
      {user ? <HomeUser user={user} /> : <Login />}
      <UserContext.Provider value={user}>
        <ProfileUser />
      </UserContext.Provider>
      </>
  );
}

export default App;
