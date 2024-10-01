import React from "react";
import Cards from "./Cards";
import {useState, useEffect } from 'react';
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Freebook = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
   const getBook = async () => {
    try {
    const res = await axios .get("http://localhost:4001/book");
    const data = res.data.filter((data) => data.category === "Free");
    setBook(data);
    // console.log(data);
    } catch (error) {
     console.log(error);
    }
   }
   getBook();
    }, [])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white">
        <div>
          <h1 className="text-xl font-semibold pb-2">Free Offered Courses</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, et
            totam. Tempora amet atque expedita, quae corrupti totam sed pariatur
            corporis at veniam est voluptas animi!
          </p>
        </div>
      
      <div className="slider-container">
        <Slider {...settings}>
          {book.map((item)=>(
            <Cards item={item} key = {item.id}/>
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
};

export default Freebook;
