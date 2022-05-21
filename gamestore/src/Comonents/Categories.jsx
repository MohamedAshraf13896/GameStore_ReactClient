import React from "react";
import "./Categories.css";

export default function Categories() {
  return (
    <>
      <div className="container Parent">
        <div className="p-4">
          <h5 className="d-flex text-white">Categories</h5>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Indy
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Adventure
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            MMO
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Casual Game
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Strategy
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Simulator
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Sports Game
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Action Game
          </label>
        </div>
        <div className="p-4">
          <h5 className="d-flex text-white">Platforms</h5>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            PC
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            PlayStation 5
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            PlayStation 4
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Xbox Series
          </label>
        </div>
        <div className="d-flex CatItem">
          <input
            className="InpItem"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1" className="labItem">
            {" "}
            Nintendo Switch
          </label>
        </div>
        <div className="p-4">
          <h5 className="d-flex text-white">Price</h5>
        </div>
        <input
          style={{
            width: "30%",
            margin: "3px",
            padding: "5px",
            borderRadius: "7px",
          }}
          type="number"
        />
        <span>-</span>
        <input
          style={{
            width: "30%",
            margin: "3px",
            padding: "5px",
            borderRadius: "7px",
          }}
          type="number"
        />
        <button className="w-50 d-block container mt-4 btn btn-warning btnsub m-auto">
          Apply Fillters
        </button>
      </div>
    </>
  );
}
