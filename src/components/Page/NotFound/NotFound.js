import React from 'react';

const NotFound = () => {
    return (
      <div>
        <div
          class="hero min-h-screen"
          style={{
            backgroundImage: `url("https://i.ibb.co/19dPvbV/6461675.jpg")`,
          }}
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                        <h1 class="mb-5 text-8xl text-yellow-50 font-bold">Opps!</h1>
                        <h3 className='text-3xl font bold text-yellow-200'>404 Page Not Found</h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NotFound;