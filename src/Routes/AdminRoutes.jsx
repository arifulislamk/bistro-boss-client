import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <p>Loadingggg</p>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace={true}></Navigate>
};

export default AdminRoutes;