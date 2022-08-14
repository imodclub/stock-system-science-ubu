import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
  getFirestore,
  where,
  query,
  collection,
  getDocs,
  doc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useContext, useState } from 'react';
import AuthContext from '../components/auth/Auth';
import App from '../App';

const firebaseConfig = {
  apiKey: 'AIzaSyAo2KbSE7kaxH-__s5XTImyPWxlBuT27mQ',
  authDomain: 'stock-240b7.firebaseapp.com',
  projectId: 'stock-240b7',
  storageBucket: 'stock-240b7.appspot.com',
  messagingSenderId: '1094516188928',
  appId: '1:1094516188928:web:bf6ad4775626af2a4af5e5',
  measurementId: 'G-1V5E1JVNZE',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const GetAuth = getAuth();

export const auth = firebase.auth();
export { GetAuth, db };

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

//สร้าง sign in with google
//export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signInWithGoogle = () =>
  signInWithPopup(GetAuth, provider)
    .then((result) => {
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = provider.credentialFromError(error);
    });

//ตรวจสอบรหัสผ่านหรือ user ที่ลงชื่อเข้าระบบ
export const checkAuth = () => {
  onAuthStateChanged(GetAuth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user.email);
    } else {
      console.log('ไม่พบผู้ใช้งาน');
    }
    return user;
  });
};

//ตรวจสอบกฏผู้ดูแล
export const findData = async (email) => {
  const q = query(collection(db, 'UserAdmin'), where('Email', '==', email));
  const docSnap = await getDocs(q);
  docSnap.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data().Role);
    const res = doc.data().Role;
    return res;
  });
};

//สร้างบัญชีใช้งานผู้ดูแล
export const createUserAdmin = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

//Signin with Email password from Signin Form
export const signInWithEmailPasswordFromSignForm = (email, password) => {
  signInWithEmailAndPassword(GetAuth, email, password)
    .then((userCredential) => {
      const user = userCredential;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export default firebase;
