import { useContext } from 'react'
import UserContext from '../dataContext/userContext'

function ProfileUser() {
  const user  = useContext(UserContext)
  return (
    <div>
      Hello : {user}
    </div>
  );
}

export default ProfileUser