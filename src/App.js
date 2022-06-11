
import { useState, useEffect } from 'react';
import Login from './components/Login'
import Home from './components/Home'
import firebase from './services/firebase';




function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  }, [])
  
  console.log(user)
  return (
    <>
    {user ? <Home user={user} /> : <Login />}
    </>
  );
}

export default App;
