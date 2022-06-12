
import { useState, useEffect} from 'react';
import Login from './components/Login'
import HomeUser from './components/HomeUser'
import firebase from './services/firebase';
import ProfileUser from './components/ProfileUser';
import UserContext from './dataContext/userContext';



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
      <ProfileUser />
      </UserContext.Provider>
       );
}

export default App;
