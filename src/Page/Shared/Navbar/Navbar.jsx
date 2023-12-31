import { useContext } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useCarts from "../../../Hooks/useCarts";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const [carts] = useCarts()
    const handleLogOut = () => {
        logOut()
            .then(() => { 
                console.log('logout successfully');
            })
            .catch(error => console.log(error));
    }
    



    const navOptions = <>
        <li className=" text-white hover:text-white" ><Link to={"/"}>Home</Link></li>
        <li className=" text-white hover:text-white" ><Link to={"/menu"}>Our Menu</Link></li>
        <li className=" text-white hover:text-white" ><Link to={"/order/salad"}>Order Food </Link></li>
        <li className=" text-white hover:text-white" ><Link to={"/secret"}>Secret</Link></li>
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                    <FaShoppingCart className="mr-2" />
                    <div className="badge badge-secondary">+{carts?.length}</div>
                </button>

            </Link>
        </li>

        {
            user ? <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
    </>
    

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-10 bg-base-100 text-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                     <a className="btn">Get started</a>
                    
                </div>
            </div>
        </>
    );
};

export default Navbar;