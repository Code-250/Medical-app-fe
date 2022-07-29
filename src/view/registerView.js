import React from "react";
import { Button } from "../components/button";
import Input from "../components/InputComponent";
import { FaLock } from "react-icons/fa";
import { BsFillPersonFill, BsPhoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
          height: "670px",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 0,
          margin: "0px 30px",
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
          Responsive Registration Form
        </h1>
        <div style={{ paddingTop: 10 }}>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              margin: "-20px 0px",
            }}
          >
            <Input
              placeholder="first Name"
              children={<BsFillPersonFill />}
              custom="200px"
            />
            <Input
              placeholder="last Name"
              children={<BsFillPersonFill />}
              custom="220px"
            />
          </span>
          <Input placeholder="username" children={<BsFillPersonFill />} />
          <Input placeholder="Password" children={<FaLock />} />
          <Input placeholder="Age" children={<BsFillPersonFill />} />
          <Input placeholder="Phone number" children={<BsPhoneFill />} />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            <div style={{ padding: "10px 10px 0px 10px" }}>
              <input type="radio" name="gender" value="male" />
              <label style={{ margin: "0px 10px 0px 10px" }}>Male</label>
            </div>
            <div style={{ padding: "10px 20px 0px 20px" }}>
              <input type="radio" name="gender" value="female" />
              <label style={{ margin: "0px 10px 0px 10px" }}>Female</label>
            </div>
          </div>
          <div style={{ padding: "15px 0px" }}>
            <select
              style={{
                padding: "8px",
                width: "450px",
                margin: "5px 0px",
                color: "#777",
              }}
            >
              <option>Select a role</option>
              <option>Patient</option>
              <option>Physician</option>
              <option>Pharmacist</option>
              <option>Admin</option>
            </select>
          </div>

          <Button title="Register" />
        </div>
        <p style={{ paddingTop: 20 }}>
          Already have an account?{" "}
          <Link to="/" style={{ color: "grey" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;
