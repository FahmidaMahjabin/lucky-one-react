import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
const Food = (props) => {
    // console.log("props in Food component", props);
    const {food} = props;
    const {name, picture, location, balance} = food;
    const [foodsInCart, setFoodsInCart] = useState([]);
    
    const addToCart = (food) =>{
        console.log("food in addToCart:", food);
        // const newFoodList = [...foodsInCart, food]
        // console.log("newFoodList:", newFoodList)
        // setFoodsInCart(newFoodList)
        // console.log("foodsInChart:",foodsInCart)

        // foodsInCart.map(food => <CartItem key = {food.id} food = {food}></CartItem> )
        <CartItem food = {food}></CartItem>


    }
    return (
        <div className = "col-12 col-lg-4">
            <div className="card">
                <img src={picture} className="card-img-top" alt = {name} ></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price:{balance}
                        <br></br>
                        Location: {location}
                    </p>
                    <button href="#" className="btn btn-warning  w-100" onClick={() => addToCart(food)}>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Add To Cart</button>
                </div>
            </div>
        </div>
    );
};
// const addToCart = (food) =>{
//     const newFoodList = [...foodsInCart, food];
//     setFoodsInCart(newFoodList)
//     foodsInCart.map(food => <CartItem food = {food}></CartItem> )


// }
export default Food;
    