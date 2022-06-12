import {useContext} from 'react'

function ProfileUser(props) {
    const user = useContext(props)
  return (
    <div>Hello : {user}</div>
  )
}

export default ProfileUser