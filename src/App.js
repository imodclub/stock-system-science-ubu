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
  );
}

export default App;
