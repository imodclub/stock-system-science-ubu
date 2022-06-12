
import { useState, useEffect, useContext, createContext } from 'react';
import Login from './components/Login'
import HomeUser from './components/HomeUser'
import firebase from './services/firebase';


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
     <UserContext.Provider value={user}>
      {user ? <HomeUser user={user} /> : <Login />}
      </UserContext.Provider>
       );
}

export default App;
