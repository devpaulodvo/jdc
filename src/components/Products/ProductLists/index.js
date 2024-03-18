import React from "react";
import styles from "./productlists.module.css";

const ProductLists = ({products}) => {
    return(
        <div className={`${styles.product}`}>
            <img className={`${styles.wrapper}`} src={products.img}/>
            <span className={`${styles.productname}`}>{products.productName}</span>
        </div>
    )
}

export default ProductLists;

