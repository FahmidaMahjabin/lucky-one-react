import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    
    const {foodsInCart} = props;
    console.log("foodsInCart in Cart", foodsInCart)
    
    return (
        <div className='text-light text-center'>
            <h2>Show Cart</h2>
            <div>
                {
                    foodsInCart.map(food => <CartItem food = {food}></CartItem>)
                }
            </div>
            
            {/* {
                for(let food of foodsInCart){

                    console.log("food in addToCart:", food);
                    <CartItem key = {food.id} food = {food}></CartItem>
                }
            } */}
            
            
            

        </div>
    );
};

export default Cart;