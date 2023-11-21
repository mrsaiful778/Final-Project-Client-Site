import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import Navbar from "../Page/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
 
    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('signup');

    return (
        <div className="">
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;