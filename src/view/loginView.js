import React from "react";
import { Button } from "../components/button";
import Input from "../components/InputComponent";
import { FaLock } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
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
        <div>
          <Input
            placeholder="username"
            children={<BsFillPersonFill />}
            custom="300px"
            customMargin="20px 0px"
          />
          <Input
            placeholder="Password"
            children={<FaLock />}
            custom="300px"
            customMargin="20px 0px"
          />

          <Button
            title="Login"
            custom="300px"
            onClick={() => navigate("Dashboard")}
          />
        </div>
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
