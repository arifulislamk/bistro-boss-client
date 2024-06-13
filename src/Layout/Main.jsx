import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    // console.log(location)
    const noheaderFoter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noheaderFoter || <NavBar />}
            <Outlet />
            {noheaderFoter || <Footer />}
        </div>
    );
};

export default Main;