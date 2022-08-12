
import { useState, useEffect, useContext, Fragment } from 'react';
import AuthContext from './components/auth/Auth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import firebase, { db, GetAuth,checkAuth } from './services/firebase';
import ProfileUser from './components/ProfileUser';
import RegisterAdmin from './components/register_admin/RegisterAdmin'
import AdminDashBoard from './components/adminDashboard/Dashboard';
import UsersDashBoard from './components/usersDashboard/Dashboard';
import Home from './components/Home';
import ButtonAddUser from './components/adminDashboard/Tools/ButtonAddUser'
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

import SignIn from './components/signin/Signin'

import ReadDataUser from './components/Tools/ReadDataUser';
import AddOrUpdateProfile from './components/usersDashboard/AddOrUpdateProfile'
import MaterialsList from './components/adminDashboard/MaterialsList';


function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);


  const auth = GetAuth;
  const Currentuser = auth.currentUser;
  var ValidatorTextRole = "staff"
  let Currentemail;
  let displayname;
  let uid

 
 

  //check user local storage
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setLoading(false)
      if (authUser) {
        setUser(authUser);
        setLoading(true)
      } else {
        setUser(null);
      }
    });
  }, []);

  //ตรวจสอบ Currentuser ถ้าไม่ใช่ค่าว่างให้ทำตามเงื่อนไข
  if (Currentuser !== null) {
    Currentemail = Currentuser.email;
    uid = Currentuser.uid;
    displayname = Currentuser.displayName;
    console.log(Currentemail + ' ' + displayname + ' ' + uid); 
  }
  useEffect(() => {
    setName(displayname);
  }, []);

  //ค้นหาผู้ใช้ว่า Currentemail และ Email ตรงกันหรือไม่ ถ้ามีให้เก็บค่าสถานะผู้ใช้ staff ไว้ใน setUser
  const findData = async () => {
    const q = query(
      collection(db, 'User'),
      where('Email', '==', Currentemail)
    );
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      if (Currentemail === doc.data().Email) {
        setRole(doc.data().Role);
      } else {
        console.log('ไม่พบค่า');
      }
    });
  };
  findData();

//ตรวจสอบผู้ใช้ว่าเป็น staff หรือไม่
  const load = () => {
    if (user && role === ValidatorTextRole) {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          setLoading(false);
          resolve("done")
        }, 2000);
      }) 
      return <AdminDashBoard />
      
    } else {
       
      
      return <></>;
    }
  };

  return (
    <div>
      <BrowserRouter>
        <AuthContext.Provider value={{ Currentemail, displayname, uid, role }}>
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
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
            <Route path="admindashboard" element={load()}></Route>
            {/** Test ReadData */}
            <Route path="readdatauser" element={<ReadDataUser />}></Route>
            {/** End Test ReadData */}
            {/** Test ReadData */}
            <Route path="addprofile" element={<AddOrUpdateProfile />}></Route>
            {/** End Test ReadData */}
          </Routes>
         
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
