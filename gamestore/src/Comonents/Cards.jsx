import React from "react";
import "./Cards.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import spider from "../Imgs/Spider.jpg";
import Escape from "../Imgs/Escape.jpg";
import NeedSpeed from "../Imgs/Need for Speed.jpg";
import Call from "../Imgs/Call Of Duty.jpg";
import pug from "../Imgs/Pubg.jpg";
import lar from "../Imgs/Lara.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
swiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export function Cards() {
  return (
    <section className="container">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="container">
            <div className="content">
              <div className="cards">
                <div className="cardContent">
                  <div className="image">
                    <img src={spider} alt="" />
                    <div className="name-profession">
                      <span className="name">Spider Man</span>
                      <span className="profession">PS5</span>
                    </div>
                    <div className="rating mt-2">
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                    </div>
                    <div className="psalary mt-2">
                      <div className="salary">80$</div>
                      <button className="btn btn-warning btnsubmit">Buy</button>
                    </div>
                  </div>
                  "
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="content">
              <div className="cards">
                <div className="cardContent">
                  <div className="image">
                    <img src={Escape} alt="" />
                    <div className="name-profession">
                      <span className="name">Escape</span>
                      <span className="profession">PS4</span>
                    </div>
                    <div className="rating mt-2">
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarBorderIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarBorderIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                    </div>
                    <div className="psalary mt-2">
                      <div className="salary">100$</div>
                      <button className="btn btn-warning btnsubmit">Buy</button>
                    </div>
                  </div>
                  "
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="content">
              <div className="cards">
                <div className="cardContent">
                  <div className="image">
                    <img src={NeedSpeed} alt="" />
                    <div className="name-profession">
                      <span className="name">Speed</span>
                      <span className="profession">PS5</span>
                    </div>
                    <div className="rating mt-2">
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                    </div>
                    <div className="psalary mt-2">
                      <div className="salary">90$</div>
                      <button className="btn btn-warning btnsubmit">Buy</button>
                    </div>
                  </div>
                  "
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="content">
              <div className="cards">
                <div className="cardContent">
                  <div className="image">
                    <img src={Call} alt="" />
                    <div className="name-profession">
                      <span className="name">Call Of Duty</span>
                      <span className="profession">PS5</span>
                    </div>
                    <div className="rating mt-2">
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarBorderIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarBorderIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                    </div>
                    <div className="psalary mt-2">
                      <div className="salary">150$</div>
                      <button className="btn btn-warning btnsubmit">Buy</button>
                    </div>
                  </div>
                  "
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="content">
              <div className="cards">
                <div className="cardContent">
                  <div className="image">
                    <img src={pug} alt="" />
                    <div className="name-profession">
                      <span className="name">Pubg</span>
                      <span className="profession">PS5</span>
                    </div>
                    <div className="rating mt-2">
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                    </div>
                    <div className="psalary mt-2">
                      <div className="salary">85$</div>
                      <button className="btn btn-warning btnsubmit">Buy</button>
                    </div>
                  </div>
                  "
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="content">
              <div className="cards">
                <div className="cardContent">
                  <div className="image">
                    <img src={lar} alt="" />
                    <div className="name-profession">
                      <span className="name">Lara</span>
                      <span className="profession">PS5</span>
                    </div>
                    <div className="rating mt-2">
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon
                        sx={{ color: "#ffc107", fontSize: "25px" }}
                      ></StarIcon>
                      <StarIcon sx={{ fontSize: "25px" }}></StarIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                      <StarBorderIcon
                        sx={{ fontSize: "25px" }}
                      ></StarBorderIcon>
                    </div>
                    <div className="psalary mt-2">
                      <div className="salary">50$</div>
                      <button className="btn btn-warning btnsubmit">Buy</button>
                    </div>
                  </div>
                  "
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
}
