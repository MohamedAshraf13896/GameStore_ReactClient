import React from "react";
import { Carousel } from "react-bootstrap";
import { Cards } from "./Cards";
import slider1 from "../Imgs/slider1.jpg";
import slider2 from "../Imgs/slider2.jpg";
import slider3 from "../Imgs/slider3.jpg";
import slider4 from "../Imgs/slider4.jpg";
import slider5 from "../Imgs/slider5.jpg";
import slider6 from "../Imgs/slider6.jpg";
import slider7 from "../Imgs/slider7.jpg";
import "./Cards.css";
import "./Slider.css";
export function Sliders() {
  return (
    <div>
      <div className="container-fluid margins">
        <div className="row">
          <div className="col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item>
                <img
                  style={{ height: "450px", borderRadius: "10px" }}
                  className="d-block"
                  alt="Second slide"
                  src={slider3}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "450px", borderRadius: "10px" }}
                  className="d-block "
                  alt="Second slide"
                  src={slider2}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "450px", borderRadius: "10px" }}
                  className="d-block "
                  alt="Third slide"
                  src={slider1}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "450px", borderRadius: "10px" }}
                  className="d-block"
                  alt="Third slide"
                  src={slider4}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "450px", borderRadius: "10px" }}
                  className="d-block"
                  alt="Third slide"
                  src={slider5}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "450px", borderRadius: "10px" }}
                  className="d-block "
                  alt="Third slide"
                  src={slider6}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ height: "450px", borderRadius: "10px" }}
                  className="d-block "
                  alt="Third slide"
                  src={slider7}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
