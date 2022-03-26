import React from 'react';
import Food from '../Food/Food';

const Container = (props) => {
    const foods = props.foods;
    
    return (
        <div className = "container">
            <div className = "row g-2">
                <div className = "col-8 bg-secondary">
                    <div className='row align-items-stretch'>
                        {foods.map(food => <Food key = {food.id} food = {food}></Food>)}
                    </div>
                    
                </div>
                <div className = "col-4 bg-dark">col-4</div>
            </div>
            
            
        </div>
    );
};

export default Container;