
import { useState, useEffect, useContext } from 'react';
import AuthContext from './components/auth/Auth';
import Login from './components/Login'
import firebase, { db, GetAuth,checkAuth } from './services/firebase';
import ProfileUser from './components/ProfileUser';
import RegisterAdmin from './components/register_admin/RegisterAdmin'
import AdminDashBoard from './components/adminDashboard/Dashboard';
import UsersDashBoard from './components/usersDashboard/Dashboard';
import Index from './components/Index';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
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
import { useLocation } from 'react-router';
import SignIn from './components/signin/Signin'

import ReadDataUser from './components/Tools/ReadDataUser';


function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const auth = GetAuth;
  const Currentuser = auth.currentUser;
  let Currentemail;
  let displayname;

  //check user local storage

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (Currentuser !== null) {
    Currentemail = Currentuser.email;
    const uid = Currentuser.uid;
    displayname = Currentuser.displayName;
    console.log(Currentemail + ' ' + displayname + ' ' + uid);
  }
  useEffect(() => {
    setName(displayname);
  }, []);

  const findData = async () => {
    const q = query(collection(db, "UserAdmin"),where("Email", "==", Currentemail));
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      if (Currentemail === doc.data().Email) {
        console.log(doc.data().Role)
        setRole(doc.data().Role);
      } else {
        console.log("ไม่พบค่า");
      }
    });
  };

  findData();

  

  return (
    <div>
      <BrowserRouter>
        <AuthContext.Provider value={{ Currentemail, displayname }}>
          <Routes>
            <Route path="/" element={<Index />} exact></Route>
            <Route
              path="homeuser"
              element={user ? <UsersDashBoard /> : <SignIn />}
            ></Route>
            <Route path="profileuser" element={<ProfileUser />}></Route>
            <Route
              path="signin"
              element={user ? <Navigate to="/homeuser" /> : <SignIn />}
            ></Route>
            <Route path="registeradmin" element={<RegisterAdmin />}></Route>
            <Route
              path="admindashboard"
              element={user && role ? <AdminDashBoard /> : <SignIn />}
            ></Route>
            {/** Test ReadData */}
            <Route
              path="readdatauser"
              element={<ReadDataUser />}
            ></Route>
            {/** End Test ReadData */}
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
