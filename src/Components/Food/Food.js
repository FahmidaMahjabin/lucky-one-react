import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Food = (props) => {
    const {id, name, picture, location, balance} = props.food
    return (
        <div className = "col-12 col-lg-4" key = {id}>
            <div className="card">
                <img src={picture} className="card-img-top" ></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price:{balance}
                        <br></br>
                        Location: {location}
                    </p>
                    <button href="#" className="btn btn-warning  w-100">
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Food;