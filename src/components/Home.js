import React from 'react'
import {auth} from '../services/firebase'

function Home({user}) {
  return (
      <div>
          <h1>Hello, {user.displayName} </h1>
          <img src={user.photoURL} alt="profile image" />
          <button onClick={()=>auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Home