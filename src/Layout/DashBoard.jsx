import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCarts();

    // TODO: get isadmin from the database 
    const [isAdmin] = useAdmin() ;
    return (
        <div className=" flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className=" menu p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome'>
                                <FaHome /> Admin Home
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/addItems'>
                                <FaUtensils /> Add Items
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/manageItems'>
                                <FaList />Manage Items
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/bookings'>
                                <FaBook /> Manage Bookings
                            </NavLink>
                            </li>
                            <li><NavLink to='/dashboard/users'>
                                <FaUsers /> All Users
                            </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'>
                                    <FaHome /> User Home
                                </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/reservation'>
                                    <FaCalendar /> Reservation
                                </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/cart'>
                                    <FaShoppingCart />My Cart ({cart.length})
                                </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/review'>
                                    <FaAd /> Add a Review
                                </NavLink>
                                </li>
                                <li><NavLink to='/dashboard/paymentHistory'>
                                    <FaList /> Payment Real History
                                </NavLink>
                                </li>
                            </>
                    }
                    {/* shared navlink  */}
                    <div className=" divider"></div>

                    <li><NavLink to='/'>
                        <FaHome /> Home
                    </NavLink>
                    </li>
                    <li><NavLink to='/order/salad'>
                        <FaSearch /> Menu
                    </NavLink>
                    </li>
                    <li><NavLink to='/order/contact'>
                        <FaEnvelope />
                        Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="p-10 flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;