import React from 'react';

const PartsCard = ({ part }) => {
    console.log(part)
    const { name, picture, description, minimumOrder, quantity, price } = part;
    console.log(name)
    return (
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Car Parts" />
        </figure>
        <div class="card-body">
                <h2 class="card-title text-3xl">{name}</h2>
                <h4 className='font-bold text-secondary'>Price: {price} /per</h4>
                <h5 className='font-semibold'>Quantity: {quantity }</h5>
                <h5 className='font-semibold'>Minimum Order: {minimumOrder } pices</h5>
          <p>{description}</p>
          <div class="card-actions justify-center">
            <button className="btn btn-outline ">Percease</button>
          </div>
        </div>
      </div>
    );
};

export default PartsCard;