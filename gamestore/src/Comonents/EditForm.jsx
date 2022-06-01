import React, { useState, useRef, useEffect } from "react";
import FormValidation from "./FormValidation";
import "./Forms.css";
import { CategoriesApi } from "./CategoriesApi";
import { useParams } from "react-router-dom";
import cover7 from "../Imgs/cover7.jpg";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { PlatformsApi } from "./PlatformsApi";
import { ProductApi } from "./ProductApi";
export function EditForm(props) {
  const navigate = useNavigate();
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
  let { id } = useParams();
  let [ProductID, setProductID] = useState({});
  let GetProductByID = async () => {
    try {
      let response = await ProductApi.getByID(id);

      setProductID(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ProductApi.getByID(id)
      .then((Data) => {
        setProductID(Data.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  const [errors, setErrors] = useState({});
  const handleFormDelete = (e) => {
    swal({
      title: "Success!",
      text: `${values.Name} Deleted Successfuly`,
      icon: "success",
      buttons: "Ok!",
    });
    navigate("/");
    e.preventDefault();
    ProductApi.Delete(id)
      .then((Data) => {})
      .catch((Error) => {
        console.log(Error);
      });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(FormValidation(values));
    if (
      refinput.current.value &&
      refinputsalary.current.value &&
      refinputimg.current.value &&
      document.getElementById("Cateval").value != 0 &&
      document.getElementById("Platformval").value != 0
    ) {
      setValues({
        Name: "",
        Salary: "",
        Img: "",
        Cateogory_ID: "",
        Platform_ID: "",
      });

      swal({
        title: "Success!",
        text: `${values.Name} Edited Successfuly`,
        icon: "success",
        buttons: "Ok!",
      });
      navigate("/");
      var file = values.Img.split("\\");
      var fileName = file[file.length - 1];
      values.Img = fileName;
      ProductApi.Put(id, values)
        .then((Data) => {})
        .catch((Error) => {
          console.log(Error);
        });
    }
  };
  const [values, setValues] = useState({
    Name: "",
    Salary: "",
    Img: "",
    Cateogory_ID: "",
    Platform_ID: "",
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
  const handleChangesalary = (e) => {
    setValues({
      ...values,
      Salary: e.target.value,
    });
  };
  const handleChangeeimg = (e) => {
    setValues({
      ...values,
      Img: e.target.value,
    });
  };
  const handleChangeecateogory_ID = (e) => {
    setValues({
      ...values,
      Cateogory_ID: e.target.value,
    });
  };
  const handleChangeeplatform_ID = (e) => {
    setValues({
      ...values,
      Platform_ID: e.target.value,
    });
  };

  return (
    <>
      <div className="parent d-flex">
        <div className="imgdiv col-8 margins">
          <img className="imagee" alt="" src={cover7} />
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
                    <div className="form-group">
                      <input
                        style={{ borderRaduis: "20px" }}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleChange}
                        ref={refinput}
                        defaultValue={ProductID.name}
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
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group mb-5">
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Price"
                          onChange={handleChangesalary}
                          ref={refinputsalary}
                          defaultValue={ProductID.salary}
                        />
                      </div>
                      {errors.Salary && (
                        <p className="d-block errors">{errors.Salary}</p>
                      )}
                      {errors.Salaryvalid && (
                        <p
                          className="mt-1 d-block"
                          style={{ color: "#00ff00" }}
                        >
                          {errors.Salaryvalid}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-5">
                    <div className="form-group">
                      <div className="input-group">
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Img"
                          onChange={handleChangeeimg}
                          ref={refinputimg}
                          defaultValue={ProductID.img}
                        />
                      </div>
                      {errors.Img && (
                        <p className="d-block errors">{errors.Img}</p>
                      )}
                      {errors.Imgvalid && (
                        <p
                          className="mt-1 d-block"
                          style={{ color: "#00ff00" }}
                        >
                          {errors.Imgvalid}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-5">
                    <div className="form-group">
                      <select
                        onChange={handleChangeecateogory_ID}
                        placeholder="cateogory_Name"
                        className="form-control"
                        asp-items="deptItems"
                        id="Cateval"
                        value={Cateogory.id}
                      >
                        <option value="0">--Select Cateogory--</option>
                        {Cateogory.map((Cateogory) => {
                          return (
                            <option value={Cateogory.id}>
                              {Cateogory.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {errors.Cateogory_ID && (
                      <p className="d-block errors">{errors.Cateogory_ID}</p>
                    )}
                    {errors.Cateogory_IDvalid && (
                      <p className="mt-1 d-block" style={{ color: "#00ff00" }}>
                        {errors.Cateogory_IDvalid}
                      </p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 mb-5">
                    <div className="form-group">
                      <select
                        onChange={handleChangeeplatform_ID}
                        placeholder="platform_Name"
                        className="form-control"
                        asp-items="deptItems"
                        id="Platformval"
                        value={Platform.id}
                      >
                        <option value="0">--Select Platform--</option>
                        {Platform.map((Platform) => {
                          return (
                            <option value={Platform.id}>{Platform.name}</option>
                          );
                        })}
                      </select>
                    </div>
                    {errors.Platform_ID && (
                      <p className="d-block errors">{errors.Platform_ID}</p>
                    )}
                    {errors.platform_IDvalid && (
                      <p className="mt-1 d-block" style={{ color: "#00ff00" }}>
                        {errors.Platform_IDvalid}
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
                <button
                  onClick={handleFormDelete}
                  className="btn btn-block confirm-button m-4"
                  style={{ color: "#000", backgroundColor: "#ff6a68" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
