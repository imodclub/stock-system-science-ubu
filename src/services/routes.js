import { Add } from "@mui/icons-material";
import { Navigate, useRoutes } from "react-router-dom";
import AddUserForm from '../components/AddUsersForm'
import Home from '../pages/Home'







export default function Router() {
    return useRoutes([{
        path: '/home',
        element: <Home />,
        children: [{ path: 'adduserform', element: <AddUserForm /> }]
    }])
}