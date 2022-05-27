import React from 'react';

const Banner = () => {
    return (
      <div>
        <div class="carousel w-full">
          <div id="slide1" class="carousel-item relative w-full">
            <img
              src="https://www.simpleimageresizer.com/_uploads/photos/3eaf59d2/AdobeStock_224217588_3_1024x480.jpeg"
              class="w-full"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img
              src="https://www.simpleimageresizer.com/_uploads/photos/3eaf59d2/car-joy-smiling-spanner-occupation_1024x480.jpg"
              class="w-full"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img
              src="https://www.simpleimageresizer.com/_uploads/photos/3eaf59d2/1908.i211.018..car_parts_background_realistic_1024x480.jpg"
              class="w-full"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <img
              src="https://www.simpleimageresizer.com/_uploads/photos/3eaf59d2/crashed-auto-in-repair-workshop-colorful-banner-vector-21402017_1024x480.jpg"
              class="w-full"
            />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;