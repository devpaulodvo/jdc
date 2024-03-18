import React from "react";
import styles from "./products.module.css";
import freshchicken from "../../Assets/freshchicken.png";
import livechicken from "../../Assets/livechicken-min.png";
import chickenfeet from "../../Assets/chickenfeet-min.png";
import chickenliver from "../../Assets/chickenliver-min.png";
import ProductLists from "./ProductLists";

const Products = () => {
    const products = [
        {productName: "Dressed Whole Chicken", img: freshchicken},
        {productName: "Live Chicken", img: livechicken},
        {productName: "Chicken Liver", img: chickenliver},
        {productName: "Chicken Feet", img: chickenfeet}
    ];
    return(
        <div className={`${styles.container}`}>
            <h1>Products</h1>
            <div className={`${styles.productlist}`}>
                {
                    products.map((product, index)=>{
                        return(
                            <ProductLists key={index} products={product}/>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default Products;