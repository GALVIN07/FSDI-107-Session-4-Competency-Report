

import React, { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
    const [quantity, setQuantity] = useState(props.minimum);


    const increase = () =>  {
        setQuantity(quantity + 1);
    };
    const decrease = () => {
        let newVal = quantity - 1;
        if (newVal >= props.minimum) {
        setQuantity(quantity - 1);
        }
    };

    return ( 
    <div className="quantity-picker">
        <button disabled={quantity === props.minimum} onClick={decrease} className="btn bnt-sm btn-primary">-</button>
        <label className="lblQuantity">{quantity}</label>
        <button  onClick={increase} className="btn bnt-sm btn-primary">+</button>
    </div>
    );
};

export default QuantityPicker;