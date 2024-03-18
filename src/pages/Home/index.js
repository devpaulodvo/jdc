import React from "react";
import styles from "./home.module.css";
import HomeNav from "../../components/HomeNav";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import Footer from "../../components/Footer";


const Home = () => {
    return(
        <div className={`${styles.container}`}>
            <HomeNav/>
            <Hero/>
            <Products/>
            <Footer/>
        </div>
    )
}

export default Home;