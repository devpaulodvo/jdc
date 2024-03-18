import React from "react";
import styles from "./footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import nmis from "../../Assets/nmislogo.png";
import bounty from "../../Assets/bountylogo.png";
import magnolia from "../../Assets/magnolialogo.png";
import sanmig from "../../Assets/sanmiglogo.png";
import GoogleM from "../GoogleM";
import { NavLink } from "react-router-dom";

const Footer = () => {

    return(
        <div className={`${styles.maincontainer}`}>   
            <div className={`${styles.container}`}>
                <ul className={`${styles.footerul}`}>
                    <NavLink to={"/"}>
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to={"/aboutus"}>
                        <li>About Us</li>
                    </NavLink>
                        {/* <li>Products</li> */}
                    <NavLink to={"/contactus"}>
                        <li>Contact Us</li>
                    </NavLink>
                </ul>
                <div className={`${styles.map}`}>
                    <div className={`${styles.gmap}`}>
                        <GoogleM/>
                    </div>
                </div>
                <div className={`${styles.socialmediaContainer}`}>
                    <label>Social media</label>
                    <ul className={`${styles.socialmedia}`}>
                        <li><FaFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaYoutube /></li>
                    </ul>
                </div>
                <div className={`${styles.partner}`}>
                    <ul className={`${styles.partneritems}`}>
                        <li><img src={magnolia}/></li>
                        <li><img src={sanmig}/></li>
                        <li><img src={nmis}/></li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.credits}`}>
                <p>Website design by Jelyn's Poultry and Dressing Plant | © 2024 All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;