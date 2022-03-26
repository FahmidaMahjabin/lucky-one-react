import { faBasketShopping, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./CartItem.css"
const CartItem = (props) => {
    
    const {food, foodsInCart, setFoodsInCart} = props;
    console.log("setFoodsInCart:", setFoodsInCart)
    const {picture, name} = food;
    return (
        <div className='row item justify-center'>
            <img className='col image' src = {picture}></img>
            <div className='col'>{name}</div>
            <button className='col' onClick={
                ()=>{
                    let cartAfterDelete = [...foodsInCart];
                    const indexOfFood = cartAfterDelete.indexOf(food);

                    cartAfterDelete.splice(indexOfFood, 1);
                    setFoodsInCart(cartAfterDelete)
                    

                }
            }>
                <FontAwesomeIcon icon = {faBasketShopping}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default CartItem;