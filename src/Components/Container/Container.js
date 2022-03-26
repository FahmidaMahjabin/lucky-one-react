import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import Food from '../Food/Food';

const Container = (props) => {
    const foods = props.foods;
    // function = addToCart(jei food e click korbo oita cart e add hobe)
    // input = list of food object 
    // step1:jei food e add korbo oita list e add hobe and list theke ekta kore food cartItem e add korbe
    const [foodsInCart, setFoodsInCart] = useState([]);
    const addToCart = (food) =>{
        // console.log("food in addToCart:", food);
        const newFoodList = [...foodsInCart, food]
        // console.log("newFoodList:", newFoodList)
        setFoodsInCart(newFoodList)
        console.log("foodsInChart:",foodsInCart)

       
        // <CartItem food = {food}></CartItem>


    }
    
    return (
        <div className = "container">
            <div className = "row g-2">
                <div className = "col-8 bg-secondary">
                    <div className='row align-items-stretch'>
                        {foods.map(food => <Food key = {food.id} food = {food} eventHandler = {addToCart}></Food>)}
                    </div>
                    
                </div>
                <div className = "col-4 bg-dark">
                    <Cart foodsInCart = {foodsInCart}></Cart>
                </div>
            </div>
            
            
        </div>
    );
};

export default Container;