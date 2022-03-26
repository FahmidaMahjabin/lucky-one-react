import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = (props) => {
    
    const {foodsInCart, setFoodsInCart} = props;
    
    console.log("foodsInCart in Cart", foodsInCart)
    const getLuckyDish = () =>{
        const index = Math.round(Math.random()* foodsInCart.length);
        console.log("index", index);
        let luckyDish =foodsInCart[index];
        setFoodsInCart([luckyDish])

    }
    
    return (
        <div className='text-light text-center'>
            <h2>Show Cart</h2>
            <div>
                {
                    foodsInCart.map(food => <CartItem food = {food} foodsInCart = {foodsInCart} setFoodsInCart = {setFoodsInCart}></CartItem>)
                }
            </div>
            <button class = "btn btn-light m-5" onClick={() =>{
                let emptyCart = [];
                setFoodsInCart(emptyCart)
            }}>Clear All</button>

            <button class = "btn btn-danger m-5" onClick = {getLuckyDish}>Get Lucky Dish</button>
            
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