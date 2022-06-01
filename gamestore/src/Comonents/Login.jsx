import React, { useState, useRef, useEffect } from "react";
import "./Forms.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import login from "../Imgs/login.jpg";
export function Login(props) {
  const navigate = useNavigate();
  const refinput = useRef();
  const refinputsalary = useRef();
  const refinputimg = useRef();
  const url = "http://localhost:4151/api/Account/login";
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  function submit(e) {
    e.preventDefault();
    console.log(data);
    axios
      .post(url, {
        userName: data.userName,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Success!",
          text: `Welcome ${data.userName}`,
          icon: "success",
          buttons: "Ok!",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("err").innerHTML = "Wrong User";
      });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <>
      <div className="parent d-flex">
        <div className="imgdiv col-8 margins">
          <img className="imagee" alt="" src={login} />
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
                      <div
                        style={{ marginTop: "140px" }}
                        className="form-group"
                      >
                        <h2 className="errors">Join our store today</h2>
                        <input
                          style={{ marginTop: "100px", borderRaduis: "20px" }}
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          ref={refinput}
                          defaultValue={data.userName}
                          id="userName"
                          onChange={(e) => handle(e)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group mb-5">
                      <div className="input-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          ref={refinputsalary}
                          defaultValue={data.password}
                          id="password"
                          onChange={(e) => handle(e)}
                        />
                      </div>
                      <p className="d-block errors" id="err"></p>
                    </div>
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
                  onClick={submit}
                  className="btn btn-warning btn-block confirm-button"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
