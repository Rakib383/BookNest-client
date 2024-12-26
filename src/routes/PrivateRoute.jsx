import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Loading } from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) {
        return <Loading/>
    }
     
    if(!loading && user) {
        return children
    }


    return (
       <Navigate state={location.pathname} to="/login"/>
       
    )
}
