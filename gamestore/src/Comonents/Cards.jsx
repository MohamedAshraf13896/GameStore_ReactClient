import React, { useEffect, useState } from "react";
import { ProductApi } from "./ProductApi";
import "./Cards.css";
import { NavLink } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
swiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export function Cards() {
  let [Cards, setCards] = useState([]);
  let getAllProducts = async () => {
    try {
      let response = await ProductApi.get();
      setCards(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
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
        {Cards.map((product) => {
          return (
            <SwiperSlide>
              <div className="container">
                <div className="content">
                  <div className="cards">
                    <div className="cardContent">
                      <div className="image">
                        <img src={`DataBaseImgs/${product.img}`} alt="" />
                        <div className="name-profession">
                          <span className="name">{product.name}</span>
                          <span className="profession">
                            {product.platform_Name}
                          </span>
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
                        <div className="salary">{product.salary + " $"}</div>
                        <div className="psalary mt-2">
                          <button className="btn btn-warning btnsubmit">
                            Buy
                          </button>
                          <NavLink
                            style={{ alignItems: "center", padding: "5px" }}
                            className="btn btn-warning btnsubmit"
                            to={`/details/${product.id}`}
                          >
                            Details
                          </NavLink>
                        </div>
                      </div>
                      "
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </section>
  );
}
