import React from 'react';

const Banner = () => {
    return (
      <div>
        <div class="carousel w-full">
          <div id="item1" class="carousel-item w-full">
            <img
              src="https://i.ibb.co/Rj75vvM/car-joy-smiling-spanner-occupation-800x200.jpg"
              class="w-full"
            />
          </div>
          <div id="item2" class="carousel-item w-full">
            <img
              src="https://i.ibb.co/5Y15tDC/crashed-auto-in-repair-workshop-colorful-banner-vector-21402017-800x200.jpg"
              class="w-full"
            />
          </div>
          <div id="item3" class="carousel-item w-full">
            <img
              src="https://i.ibb.co/c6rBRgH/Adobe-Stock-224217588-800x200.jpg"
              class="w-full"
            />
          </div>
          <div id="item4" class="carousel-item w-full">
            <img
              src="https://i.ibb.co/tCyYFM5/1908-i211-018-car-parts-background-realistic-800x200.jpg"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2">
          <a href="#item1" class="btn btn-xs">
            1
          </a>
          <a href="#item2" class="btn btn-xs">
            2
          </a>
          <a href="#item3" class="btn btn-xs">
            3
          </a>
          <a href="#item4" class="btn btn-xs">
            4
          </a>
        </div>

        {/* //   className="min-h-screen  bg-no-repeat bg-cover"
      //   style={{
      //     backgroundImage: `url(https://i.ibb.co/GPcD4KD/crashed-auto-in-repair-workshop-colorful-banner-vector-21402017.jpgx)`,
      //   }}
    
      //   <h1 className="grid justify-center items-center pt-28 text-5xl font-bold text-orange-500 ">
          
      //   </h1> */}
      </div>
    );
};

export default Banner;