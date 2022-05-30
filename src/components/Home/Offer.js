import React from 'react';

const Offer = () => {
    return (
      <div >
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content  flex-col lg:flex-row">
            <img
              src="https://cdn.wedevs.com/uploads/2017/11/dokan-multivendor-shipping-packages-features.png"
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div className='w-2/4'>
              <h1 class="text-4xl font-bold">Delivery with in 24 hour </h1>
              <p class="py-6">
                We deliver any product whitin our state a maximum of 24 hours
              </p>
              <button class="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Offer;