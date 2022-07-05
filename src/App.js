
import { useState, useEffect, useContext } from 'react';
import AuthContext from './components/auth/Auth';
import Login from './components/Login'
import HomeUser from './components/HomeUser'
import firebase, { db, GetAuth,checkAuth } from './services/firebase';
import ProfileUser from './components/ProfileUser';
import RegisterAdmin from './components/register_admin/RegisterAdmin'
import AdminDashBoard from './components/adminDashboard/Dashboard';
import Page400 from './components/Page400';
import Index from './components/Index';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import { sendSignInLinkToEmail } from 'firebase/auth';
import {
  getFirestore,
  where,
  query,
  collection,
  getDocs,
  doc,
} from 'firebase/firestore';
import { formControlUnstyledClasses } from '@mui/base';


function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const auth = GetAuth;
  const Currentuser = auth.currentUser;
  let Currentemail
  let displayname
  
  //check user local storage

  useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser);
        } else {
          setUser(null);
        }
      })
     
    }, []);
 
 
    if (Currentuser !== null) {
      Currentemail = Currentuser.email;
      const uid = Currentuser.uid;
      displayname = Currentuser.displayName;
      console.log(Currentemail + ' '+displayname+ ' ' + uid);
      
      }
  useEffect(() => {
    setName(displayname);
  }, []);
 
    const findData = async () => {
    const q = query(collection(db,'UserAdmin'),where("Email","==",Currentemail))
    const docSnap = await getDocs(q)
      docSnap.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data().Role)
        if (Currentemail === doc.data().Email) {
         setRole(doc.data().Role)
        } else {
          console.log("ไม่พบค่า")
       }
      })
  }

  findData(Currentemail)


  return (
    <div>
      <BrowserRouter>
        <Link to="/admindashboard">adminDashboard</Link>
        <AuthContext.Provider value={displayname}>
          <Routes>
            <Route path="/" element={<Index />} exact></Route>
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
            <Route
              path="admindashboard"
              element={user && role ? <AdminDashBoard /> : <Index />}
            ></Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
