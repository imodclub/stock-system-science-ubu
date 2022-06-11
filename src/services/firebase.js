import firebase from 'firebase/compat/app'
import "firebase/compat/auth" 

const firebaseConfig = {
  apiKey: 'AIzaSyBpNsE6wgG-qESsRUsNibo9Lu1tCFPWAq4',
  authDomain: 'computer-service-system.firebaseapp.com',
  projectId: 'computer-service-system',
  storageBucket: 'computer-service-system.appspot.com',
  messagingSenderId: '668874593419',
  appId: '1:668874593419:web:512a5b5bd759a0869ef08e',
  measurementId: 'G-RZYE5SQBZK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

//สร้าง sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
