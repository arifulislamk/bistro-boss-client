
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <p>Loadingggg</p>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoutes;