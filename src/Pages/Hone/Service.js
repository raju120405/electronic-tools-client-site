import React from 'react';

const Service = ({service,setPurchas}) => {
    const{name, price,availableQuantity, minimumQuantity, description}=service;
    return (

        <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl mt-5">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
        <div class="card-body">
        
          <h2 class="card-title">Name: {name}</h2>
          <h2 className='text-2xl'>Price: {price}</h2>
          <h2 className='text-xl'>Available Quantity: {availableQuantity}</h2>
          <h2 className='text-xl'>Minimum Quantity: {minimumQuantity}</h2>
          <p>Description: {description}</p>
          <div class="card-actions justify-center">
          <button 
          onClick={()=>setPurchas(service)}
          class="btn btn-wide ">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Service;