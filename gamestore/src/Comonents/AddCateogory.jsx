import React, { useState, useRef, useEffect } from "react";
import FormValidation from "./FormValidation";
import "./Forms.css";
import swal from "sweetalert";
import cover3 from "../Imgs/cover3.jpg";
import { useNavigate } from "react-router";
import { CategoriesApi } from "./CategoriesApi";
export function AddCateogory(props) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(FormValidation(values));
    if (refinput.current.value) {
      setValues({
        Name: "",
      });
      swal({
        title: "Success!",
        text: `${values.Name} Added Successfuly`,
        icon: "success",
        buttons: "Ok!",
      });
      navigate("/");
    }

    CategoriesApi.Post(values)
      .then((Data) => {})
      .catch((Error) => {
        console.log(Error);
      });
  };
  const [values, setValues] = useState({
    Name: "",
  });
  const refinput = useRef();
  const refinputsalary = useRef();
  const refinputimg = useRef();
  useEffect(() => {
    refinput.current.focus();
  }, []);

  const handleChange = (e) => {
    setValues({
      ...values,
      Name: e.target.value,
    });
  };

  return (
    <>
      <div className="parent d-flex">
        <div className="imgdiv col-8 margins">
          <img className="imagee" alt="" src={cover3} />
          {errors.check && (
            <h1 className="d-block mt-3 checkerr">{errors.check}</h1>
          )}
          {errors.confirm && (
            <p className="d-block mt-3 conferr">{errors.confirm}</p>
          )}
        </div>
        <form className=" imag col 4">
          <div className="text-danger" />
          <div
            style={{ width: "91%" }}
            className="container d-flex justify-content-center"
          >
            <div className="card px-1 py-4 covers">
              <div className="card-body forma">
                <br></br>
                <div className="row">
                  <div className="col-sm-12 mb-5">
                    <div style={{ marginTop: "140px" }} className="form-group">
                      <h2 style={{ marginBottom: "100px" }} className="errors">
                        Cateogory Detalis
                      </h2>
                      <input
                        style={{ borderRaduis: "20px" }}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={values.Name}
                        onChange={handleChange}
                        ref={refinput}
                      />
                    </div>
                    {errors.Name && (
                      <p className="d-block errors"> {errors.Name}</p>
                    )}
                    {errors.Namevalid && (
                      <p className="mt-1 d-block" style={{ color: "#00ff00" }}>
                        {" "}
                        {errors.Namevalid}
                      </p>
                    )}
                  </div>
                </div>
                <div className=" d-flex flex-column text-center px-5 mt-3 mb-3">
                  {" "}
                  <small style={{ color: "white" }} className="agree-text">
                    By Booking this appointment you agree to the
                  </small>{" "}
                  <a href="#" className="terms errors">
                    Terms & Conditions
                  </a>{" "}
                </div>{" "}
                <button
                  onClick={handleFormSubmit}
                  className="btn btn-warning btn-block confirm-button"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
