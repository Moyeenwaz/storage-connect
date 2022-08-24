import React, { Component } from "react";
import Slider from "react-slick";
import CardContainer from "./Card";
import { featured } from "../dummy.js";

export default class Carousel extends Component {
  render() {
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
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        {featured.map((feature) => (
          <CardContainer
            location={feature.location}
            size={feature.size}
            occupancy={feature.occupancy}
            img={feature.img}
            key={feature.id}
            totalUnits={feature.totalUnits}
          />
        ))}
      </Slider>
    );
  }
}
