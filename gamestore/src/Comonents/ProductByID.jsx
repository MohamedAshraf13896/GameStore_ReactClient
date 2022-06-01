import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useParams } from "react-router-dom";
import { ProductApi } from "./ProductApi";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Sliders } from "./Sliders";
import "./Cards.css";
export function ProductByID() {
  let { id } = useParams();
  let [Products, setProducts] = useState([]);
  useEffect(() => {
    ProductApi.getByID(id)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Sliders></Sliders>
      <div className="App cardbox">
        <div className="row offset-4 mt-2">
          <div className="container  col-5">
            <div className="content ">
              <div className="cards">
                <div className="cardContent">
                  <div className="image">
                    <img src={`/DataBaseImgs/${Products.img}`} alt="" />
                    <div className="name-profession">
                      <span className="name">{Products.name}</span>
                      <span className="profession">
                        {Products.platform_Name}
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
                      <div className="salary">{Products.salary + " $"}</div>
                    </div>
                    <div className="psalary mt-5">
                      <NavLink to="/">
                        <ArrowBackIcon
                          sx={{ color: "#ffc107", fontSize: "25px" }}
                        ></ArrowBackIcon>
                      </NavLink>

                      <ShoppingCartIcon
                        sx={{
                          cursor: "pointer",
                          color: "#ffc107",
                          fontSize: "25px",
                        }}
                      ></ShoppingCartIcon>
                      <NavLink to={`/EditForm/${id}`}>
                        <EditIcon
                          sx={{
                            cursor: "pointer",
                            color: "#ffc107",
                            fontSize: "25px",
                          }}
                        ></EditIcon>
                      </NavLink>
                    </div>
                  </div>
                  "
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
