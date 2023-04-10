import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "title 1",
      description: "description 1",
      //from picsum.photos
      image: "../carousel_images/img1.jpg",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
      //from picsum.photos
      image: "../carousel_images/img2.jpg",
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
      //from picsum.photos
      image: "../carousel_images/img3.jpg",
    },
    {
      id: 4,
      title: "title 3",
      description: "description 3",
      //from picsum.photos
      image: "../carousel_images/img4.jpg",
    },
  ];

  const length = carouselItems.length;


  const nextSlide = () => {
    const nextIndex = current === length - 1 ? 0 : current + 1;
    setCurrent(nextIndex);
  };
  
  const prevSlide = () => {
    if(current === 0){
        setCurrent(length - 1);
      }else{
          setCurrent(current - 1);
      }
  };

  const startAutoScroll = () => {
    setTimeout(() => {
      nextSlide();
    }, 3000);
  };
  startAutoScroll();



  return (
    <div>
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <img key={index} src={item.image} alt={`Carousel item ${index + 1}`} />
          ))}
        </div>
        <button className="prev-button" onClick={prevSlide}>
          <FaArrowLeft/>
        </button>
        <button className="next-button" onClick={nextSlide}>
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
