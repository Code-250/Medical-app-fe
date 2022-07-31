import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/button";
import Input from "../components/InputComponent";
import { FaLock } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../redux/APIAction";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const loggedIndata = useSelector((store) => store.loginReducer);
  console.log(loggedIndata, "these data are from redux");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userName,
      password,
    };
    dispatch(LoginAction({ data }));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#E0E0E0",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "20px 0px",
          border: "none",
          boxShadow: "1px 1px 1px #e7efef",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "7px",
            backgroundColor: "#CB8B0E",
            position: "absolute",
            top: 0,
          }}
        ></div>
        <h1 style={{ fontWeight: "900", width: "90%" }}>
          Responsive Login Form
        </h1>
        <form>
          <Input
            placeholder="username"
            children={<BsFillPersonFill />}
            custom="300px"
            customMargin="20px 0px"
            onChange={handleUserName}
            value={userName}
          />
          <Input
            placeholder="Password"
            children={<FaLock />}
            custom="300px"
            customMargin="20px 0px"
            onChange={handlePassword}
            type="password"
            value={password}
          />

          <Button title="Login" custom="300px" onClick={handleSubmit} />
        </form>
        <p style={{ paddingTop: 20 }}>
          Does not have an account?{" "}
          <Link to="/register" style={{ color: "grey" }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
