import React, { useRef } from "react";
import styles from "./homenav.module.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { NavLink, useLocation, matchPath } from "react-router-dom";

const HomeNav = () =>{
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle(`${styles.responsiveNav}`)
    }

    return(
        <div className={`${styles.container}`}>
            <ul ref={navRef} className={`${styles.navlist}`}>
                <NavLink to={"/"}>
                    <li>Jelyn's</li>
                </NavLink>
                <NavLink to={"/aboutus"}>
                    <li>About Us</li>
                </NavLink>
                {/* <li>Products</li> */}
                <NavLink to={"/contactus"}>
                    <li>Contact Us</li>
                </NavLink>
                <button onClick={showNavBar} className={`${styles.navBtn} ${styles.navClose}`} >
                    <FaTimes/>
                </button>
            </ul>
            <button onClick={showNavBar} className={`${styles.navBtn} `}>
                <FaBars/>
            </button>
        </div>
        
    )
}

export default HomeNav;