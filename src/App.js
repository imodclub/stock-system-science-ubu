
import { useState, useEffect, useContext } from 'react';
import AuthContext from './components/auth/Auth';
import Login from './components/Login'
import HomeUser from './components/HomeUser'
import firebase, { checkAuth, findData } from './services/firebase';
import ProfileUser from './components/ProfileUser';
import RegisterAdmin from './components/register_admin/RegisterAdmin'
import AdminDashBoard from './components/adminDashboard/Dashboard';
import Page400 from './components/Page400';
import Index from './components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  const [user, setUser] = useState(null);
  //const [email, role, setEmail, setRole] = useState(null);
  //check user local storage
  checkAuth();
  
  
  
  
  /*useEffect(() => {
    firebase.auth().onAuthStateChanged((authUser) => {
        if (authUser) {
          setUser(authUser.email);
        } else {
          setUser(null)
        }
      });
    }, [])
  //findData(user)

    

  
    /*
    const findData = async () => {
    const q = query(collection(db,'UserAdmin'),where("Email","==",email))
    const docSnap = await getDocs(q)
      docSnap.forEach((doc) => {
        setRole(doc.data().Role);
          console.log(doc.id, ' => ', doc.data().Role)
      })
  }
    findData()
*/
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
            <Route
              path="admindashboard"
              element={user ? <AdminDashBoard user={user} /> : <Page400 />}
            ></Route>
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
