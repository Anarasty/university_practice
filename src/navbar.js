import React from "react";
import { Link } from 'react-router-dom'
import { useGlobalContext } from "./context";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import logo from "./movie-time-logo.png";

export const Navbar = () => {
    const {websiteTheme, setWebsiteTheme} = useGlobalContext();
    return (
        <nav>
            <div className="logo">
            {/* <Link to="/"><img src={logo} alt="Site Logo" /></Link> */}
            <Link to='/'><span>M</span>OVIE <span>T</span>IME</Link>
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/">HOME</Link>
                    {/* <span className="line-below"></span> */}
                </li>
                <li>
                    <Link to="/watchlist">FAVORITES</Link>
                    {/* <span className="line-below"></span> */}
                </li>
                <li>
                    <Link to="/rated_movies">MY RATINGS</Link>
                    {/* <span className="line-below"></span> */}
                </li>
                <li>
                    {websiteTheme === "dark" ? 
                    <HiOutlineSun style={{color:"black"}} onClick={()=>setWebsiteTheme("light")} />
                    :
                    <HiOutlineMoon onClick={()=>setWebsiteTheme("dark")} />
                    }
                </li>
            </ul>
        </nav>
    );
}