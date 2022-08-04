import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaLock } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { loginSchema } from "../validations/loginSchema";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmitHandler = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:8080/java_servlet_app/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userName: data.userName,
            password: data.password,
          }),
        }
      );
      const res = await response.json();
      console.log(res, "the response from your servlet");
      if (res.Payload && res.message) {
        localStorage.setItem("role", JSON.stringify(res.Payload.role));
        toast.success(res.message);
        navigate("/Dashboard");
      } else {
        toast.error(res.message);
        console.log(res.message);
      }
      reset();
    } catch (err) {
      console.log(err);
    }
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
            backgroundColor: "#E8AB35",
            position: "absolute",
            top: 0,
          }}
        ></div>
        <h1 style={{ fontWeight: "900", width: "90%" }}>
          Responsive Login Form
        </h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div
            style={{
              margin: "20px 0px 20px 0px",
              position: "relative",
              width: "300px",
            }}
          >
            <div
              style={{
                padding: "0px 10px 0px 10px",
                height: "40px",
                borderRight: "1px solid grey",
                position: "absolute",
                boxSizing: "border-box",
                top: errors.userName ? "30%" : "50%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BsFillPersonFill />
            </div>
            <input
              type="text"
              placeholder="userName"
              style={{
                height: "40px",
                boxSizing: "border-box",
                paddingLeft: "2.5em",
                width: "100%",
              }}
              {...register("userName")}
            />
            <p style={{ color: "red" }}>{errors.userName?.message}</p>
          </div>
          <div
            style={{
              position: "relative",
              margin: "20px 0px 20px 0px",
              width: "300px",
            }}
          >
            <div
              style={{
                padding: "0px 10px 0px 10px",
                height: "40px",
                borderRight: "1px solid grey",
                position: "absolute",
                boxSizing: "border-box",
                top: errors.password ? "30%" : "50%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="password"
              style={{
                height: "40px",
                boxSizing: "border-box",
                paddingLeft: "2.5em",
                width: "100%",
              }}
              {...register("password")}
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </div>

          <div
            style={{
              width: "300px",
              border: "none",
              borderRadius: "none",
            }}
          >
            <button
              style={{
                backgroundColor: "#E8AB35",
                padding: "10px",
                border: "none",
                width: "100%",
                color: "white",
              }}
            >
              Login
            </button>
          </div>
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
