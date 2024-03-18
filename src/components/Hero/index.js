import React from "react";
import styles from "./hero.module.css";
import { NavLink } from "react-router-dom";

import chicken1 from "../../Assets/JDC1.png";
import chicken2 from "../../Assets/JDC2.png";
import chicken3 from "../../Assets/JDC3.png";

const Hero = () => {
    const colors = [chicken1, chicken2, chicken3];
    const delay = 5000;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
    }, [index]);

    return(
        <div className={`${styles.container}`}>

              {/* Slideshow! */}
            <div className={`${styles.slideshow}`}>
                <div
                    className={`${styles.slideshowSlider}`}
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>

                    {colors.map((backgroundColor, index) => (
                    <img className={`${styles.heroes} ${styles.slide}`} key={index} src={backgroundColor}/>
                    ))}
                </div>

                <div className={`${styles.slideshowDots}`}>
                    {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`${styles.slideshowDot} ${index === idx ? `${styles.active}` : ""}`}
                        onClick={() => {
                        setIndex(idx);
                        }}
                    ></div>
                    ))}
                </div>
            </div>
             
            <NavLink to={"/contactus"}>       
              <div className={`${styles.herobtn}`}>
                <p className={`${styles.herolabel}`}>
                    Your Chicken Business Journey Begins Here!
                </p>
                <div className={`${styles.contactbtn}`}>
                    Contact Us
                </div>
              </div>
            </NavLink>
        </div>
    )
}

export default Hero;