import firebase from 'firebase/compat/app'
import "firebase/compat/auth"


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
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

//สร้าง sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 
