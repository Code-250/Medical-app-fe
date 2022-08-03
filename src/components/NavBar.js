import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Button } from "./button";

const NavBar = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#CB8B0E",
        display: "flex",
        height: "83px",
        padding: "0px 20px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" height="66px" width="60px" />
        <p
          style={{
            padding: "20px 0px 0px 10px",
            fontWeight: "800",
            lineHeight: 1,
            color: "white",
            fontStyle: "italic",
          }}
        >
          Medical Care <br /> Services
        </p>
      </div>
      <Button
        title="Log Out"
        navBar
        navBarWidth="200px"
        radius="10px"
        onClick={logOut}
      />
    </div>
  );
};
export default NavBar;
