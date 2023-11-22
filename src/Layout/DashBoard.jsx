import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { BiSolidCalendarStar } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";
import { AiFillShopping } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";


const DashBoard = () => {
    const [ cart] = useCarts();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to="/">
                            <FaHome className="mr-2" />
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar className="mr-2" />
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                        <GiWallet className="mr-2" />
                            Payment Histroy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart className="mr-2" />
                            My Cart ({cart.length}) </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <BiSolidCalendarStar className="mr-2" />
                            Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/mybookings">
                            <FaList className="mr-2" />
                            My Bookings</NavLink>
                    </li>
                    <div className="divider"> </div>
                    <li>
                        <NavLink to="/">
                            <FaHome className="mr-2" />
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <AiOutlineMenuUnfold className="mr-2" />
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/shop">
                            <AiFillShopping className="mr-2" />
                            Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/contact">
                            <MdContactMail className="mr-2" />
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;