import { faBasketShopping, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartItem = (props) => {
    console.log("props in cart item:", props.food)
    const {picture, name} = props.food;
    return (
        <div className='row'>
            <div className='col'>{picture}</div>
            <div className='col'>{name}</div>
            <div className='col'>
                <FontAwesomeIcon icon = {faBasketShopping}></FontAwesomeIcon>
            </div>
            
        </div>
    );
};

export default CartItem;