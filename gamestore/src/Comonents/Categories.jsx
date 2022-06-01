import React, { useEffect, useState } from "react";
import "./Categories.css";
import { CategoriesApi } from "./CategoriesApi";
import { PlatformsApi } from "./PlatformsApi";
export default function Categories() {
  let [Cateogory, setCateogory] = useState([]);
  let getAllCateogories = async () => {
    try {
      let response = await CategoriesApi.get();
      setCateogory(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCateogories();
  }, []);
  let [Platform, setPlatform] = useState([]);
  let getAllPlatforms = async () => {
    try {
      let response = await PlatformsApi.get();
      setPlatform(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPlatforms();
  }, []);
  return (
    <>
      <div className="container Parent">
        <div className="p-4">
          <h5 className="d-flex text-white">Categories</h5>
        </div>
        {Cateogory.map((category) => {
          return (
            <div className="d-flex CatItem">
              <label for="vehicle1" className="labItem">
                {" "}
                {category.name}
              </label>
            </div>
          );
        })}

        <div className="p-4">
          <h5 className="d-flex text-white">Platforms</h5>
        </div>
        {Platform.map((Platform) => {
          return (
            <div className="d-flex CatItem">
              <label for="vehicle1" className="labItem">
                {" "}
                {Platform.name}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
