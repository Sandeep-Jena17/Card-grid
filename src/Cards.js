import React from 'react';
import Card from './components/Card';
import img1 from './assets/unplash_car_1.jpg';
import img2 from './assets/unplash_car.jpg'
const Cards=()=>{
  return (
   <div className="container-fluid d-flex justify-content-center">
    <div className="row">
      
      <div className="col-md-4">
          <Card image={img1}/>
      </div>
      
      <div className="col-md-4">
          <Card image={img2} />
      </div>
    
      <div className="col-md-4">
          <Card image={img1} />
      </div>
    </div>    
       


   </div>
  );
}

export default Cards;
