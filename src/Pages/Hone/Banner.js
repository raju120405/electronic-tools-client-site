import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full h-80 mt-10 mb-6">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/Tq5Z4QH/tools-1595425-1920.jpg" class="w-full"/>  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/xDNnB97/electric-24301-1280.png" class="w-full"/> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://i.ibb.co/Tq5Z4QH/tools-1595425-1920.jpg" class="w-full"/> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Banner;