import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { review } from '../Data/data';
import maps from "../Data/maps.json"
import { MdStar } from 'react-icons/md';
import { BiSolidQuoteLeft } from "react-icons/bi";
import data from "../assets/images/maps/hüs.png"

const Clients = () => {
  const settings = {
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Danışan Yorumları</h3>
          {/* <p className="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of development.</p> */}
        </div>
        <div className="grid relative grid-cols-1 mt-8">
          <Slider {...settings}>
            {maps.map((item, index) => (
              <div className="customer-testi" key={index}>
                <div className="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                <BiSolidQuoteLeft style={{width:"30px",height:"30px"}}  className="mdi mdi-format-quote-open mdi-48px text-amber-500"/>
                  <p className="text-slate-400 text-[15px]">{item.comment}</p>
                  <ul  className="flex flex-row list-none mb-0 text-amber-400 mt-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <li key={star} className=""><MdStar className=""/></li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-5">
                    {console.log(item.image)}
                  <img src={item.image} className="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt="" />
                  <a href="/" className="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">{item.name}</a>
                 {/*  <span className="text-slate-400 text-sm block">{item.date}</span> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
