import React from "react";
import styles from "./contact.module.css";
import HomeNav from "../../components/HomeNav";
import Footer from "../../components/Footer";
import GoogleM from "../../components/GoogleM";

import chicken1 from "../../Assets/JDC1.png";

const Contact = () => {

    return(
        <React.Fragment>
            <HomeNav/>
            <>
            <div className={`${styles.slideshow}`}>
                <div
                    className={`${styles.slideshowSlider}`}>
                    <img className={`${styles.heroes} ${styles.slide}`} src={chicken1}/>
                </div>
            </div>
            </>
            <div className={`${styles.container}`}>
                <div className={`${styles.addressContainer}`}>
                    <h1 className={`${styles.businessName}`}>
                        Jelyn's Poultry and Dressing Plant
                    </h1>
                        <br/>
                    <p>
                        Jelyn's Poultry and Dressing Plant, Lower Tabok,
                        <br/>
                        Mandaue City, 6014
                        <br/>
                        Mobile Number: <i>+639285541448</i>
                    </p>
                    <div>

                    </div>
                </div>
                <div className={`${styles.mapContainer}`}>
                    <GoogleM/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Contact;