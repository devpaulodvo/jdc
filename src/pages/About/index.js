import React from "react";
import styles from "./about.module.css";
import HomeNav from "../../components/HomeNav";
import Footer from "../../components/Footer";

import chicken1 from "../../Assets/plant.png";

const About = () => {
    return(
        <React.Fragment>
            <HomeNav/>
            <div className={`${styles.slideshow}`}>
                <div
                    className={`${styles.slideshowSlider}`}>
                    <img className={`${styles.heroes} ${styles.slide}`} src={chicken1}/>
                </div>
            </div>
            <div className={`${styles.container}`}>
                <h1>About Us</h1>
                <p>
                    At Jelyn's, we are passionate about delivering high-quality poultry products to meet the diverse needs of our customers. 
                    As a leading distributor in the industry, we take pride in our commitment to excellence, reliability, and customer satisfaction.
                    <br/>
                    <br/>
                    Established in 2000, Jelyn's Poultry and Dressing Plant has quickly risen to prominence in the poultry distribution market. 
                    Our journey began with a simple mission: to provide fresh, hygienic, and responsibly sourced chicken products to businesses across 
                    Cebu, Philippines.
                    <br/>
                    <br/>
                    What sets us apart is our unwavering dedication to quality control at every step of the supply chain. From sourcing our poultry from trusted farms 
                    to implementing rigorous inspection protocols, we ensure that only the finest products reach our customers' shelves.
                    <br/>
                    <br/>
                    As we continue to grow, we remain steadfast in our core values of integrity, transparency, and sustainability. We strive to foster long-term partnerships 
                    with both our customers and suppliers, built on trust and mutual respect.
                    <br/>
                    <br/>
                    <span>Thank you</span> for choosing Jelyn's Poultry and Dressing Plant as your trusted poultry partner. We look forward to serving you and exceeding your expectations every step of the way.


                </p>
            </div>
            <Footer/>
        </React.Fragment>
       
    )
}

export default About;