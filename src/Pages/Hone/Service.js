import React from 'react';

const Service = ({ service, setPurchas }) => {
  const { name, price, availableQuantity, minimumQuantity, description, picture } = service;
  return (

    <div className="card card-compact  lg:max-w-lg bg-base-100 shadow-xl mt-5">
      <figure><img src={picture} alt="Shoes" /></figure>
      <div className="card-body">

        <h2 className="card-title">Name: {name}</h2>
        <h2 className='text-2xl'>Price: {price}</h2>
        <h2 className='text-xl'>Available Quantity: {availableQuantity}</h2>
        <h2 className='text-xl'>Minimum Quantity: {minimumQuantity}</h2>
        <p>Description: {description}</p>
        <div className="card-actions justify-center">
          
            <label for="purchase-modal" 
            onClick={() => setPurchas(service)}
            class="btn btn-primary w-48 ">Buy Now</label>
        </div>
      </div>
    </div>
  );
};

export default Service;