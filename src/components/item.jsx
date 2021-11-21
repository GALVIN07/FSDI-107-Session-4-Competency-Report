import "./item.css";
import QuantityPicker from "./quantityPicker";


const Item = (props) => {
    const handleAdd = () => {
        console.log("adding item to the cart");
    };

    return (
        <div className="item">
            <img src={"/images/" + props.data.image} alt="product" />
            <h5>{props.data.title || "no title"}</h5>

            <label className="total">$ {props.data.price} each</label>
            <label className="price">$ Price</label>

            <div className="controls">
            <QuantityPicker minimum={props.data.minimum || 1}/>
            <button onClick={handleAdd} className="btn btn-sm btn-dark btn-add">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
            </div>
        </div>

        
    );
};

export default Item;