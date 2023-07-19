import React from "react";
import products from "./data";

const Product = () => {
    console.log(products);
    return (
        <>
            <div className="row">
                {products.map((item,key) => (
                    <div key={key} className="col-3 product" style={{"border": "1px solid lightgray","border-radius": "5px","padding": "5px","margin": "5px","text-align":"center"}}>
                        <p>{item.brand}</p>
                        <h6>{item.title}</h6>
                        <img src={item.thumbnail} width={200} height={200} />
                        <p style={{"font-weight": "bold"}}>Price : {item.price}</p>
                        <p style={{"color": "red"}}>Discount : {item.discountPercentage} %</p>
                        <p style={{"text-align": "justify"}}>{item.description.substring(0,50)}...</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export {
    Product
}