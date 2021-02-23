import React from 'react'
//import img1 from '../assets/unplash_car_1.jpg'
const Card = (props) => {
    return (
        <div className="card text-center">
         <div className="overflow">
             <img src={props.image} alt="image_1" className="card-img-top" />
         </div>      
         <div className="card-body text-dark">
             <h4 className='card-title'> Card Title</h4>
             <p className="card-text text-secondary">
                 this is a good car.
             </p>
             <a href="#" className="btn btn-outline-success">Go Anywhere</a>
         </div>
        </div>
    );
}

export default Card
