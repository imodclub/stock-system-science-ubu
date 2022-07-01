
import { useState, useEffect } from 'react';
import AuthContext from './components/auth/Auth';
import Login from './components/Login'
import HomeUser from './components/HomeUser'
import firebase from './services/firebase';
import { GetAuth, db } from './services/firebase'
import ProfileUser from './components/ProfileUser';
import RegisterAdmin from './components/register_admin/RegisterAdmin'
import Index from './components/Index';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import {doc,getDocs,collection,query,where} from 'firebase/firestore'

function App() {
  const [user, setUser] = useState(null);
  const [email,setEmail] = useState(null)
    //check user local storage
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          const uid = user.uid;
          setEmail(user.email);
          const role = user.Role
          
        } else {
          console.log('Read failed');
        }
      });
    }, []);
  
    const findData = async () => {
    const q = query(collection(db,'UserAdmin'),where("Email","==",email))
    const docSnap = await getDocs(q)
    docSnap.forEach((doc) => {
      console.log(doc.id," => ",doc.data())
    })
  }
    findData()


  return (
    <div>
      <BrowserRouter>
        <AuthContext.Provider value={user}>
          <Routes>
            <Route path="/" element={<Index />} excat></Route>
            <Route
              path="homeuser"
              element={user ? <HomeUser user={user} /> : <Index />}
            ></Route>
            <Route path="profileuser" element={<ProfileUser />}></Route>
            <Route
              path="Login"
              element={user ? <HomeUser user={user} /> : <Login />}
            ></Route>
            <Route path="registeradmin" element={<RegisterAdmin />}></Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
      
}

export default App;
