import {useContext} from 'react'

function ProfileUser(props) {
    const user = useContext(props)
  return (
    <div>{user}</div>
  )
}

export default ProfileUser