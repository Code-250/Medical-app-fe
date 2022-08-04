import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaLock } from "react-icons/fa";
import { BsFillPersonFill, BsPhoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { registerSchema } from "../validations/registerSchema";
import "./tables/table.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });
  const onSubmitHandler = async (data) => {
    const response = await fetch(
      `http://localhost:8080/java_servlet_app/user/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: data.userName,
          firstName: data.firstName,
          password: data.password,
          phoneNumber: data.phoneNumber,
          lastName: data.lastName,
          age: data.age,
          gender: data.gender.toUpperCase(),
          role: data.role,
        }),
      }
    );
    const res = await response.json();
    console.log(res, "these are the response");
    if (res.Payload && res.message) {
      toast.success(res.message);
      navigate("/");
    } else {
      toast.error(res.message);
      console.log(res.message);
    }
    reset();
  };
  const doSomething = async (value) => {
    await trigger(["role"]);
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
          minHeight: "670px",
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
            backgroundColor: "#E8AB35",
            position: "absolute",
            top: 0,
          }}
        ></div>
        <h1
          style={{
            fontWeight: "900",
            width: "90%",
            padding: "10px 0px 0px 0px",
          }}
        >
          Responsive Registration Form
        </h1>
        <form
          style={{ paddingTop: 0 }}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div
            style={{
              margin: "20px 0px 20px 0px",
              position: "relative",
              width: "450px",
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
              width: "450px",
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
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              margin: "-20px 0px",
            }}
          >
            <div
              style={{
                position: "relative",
                margin: "20px 0px 20px 0px",
                width: "220px",
              }}
            >
              <div
                style={{
                  padding: "0px 10px 0px 10px",
                  height: "40px",
                  borderRight: "1px solid grey",
                  position: "absolute",
                  boxSizing: "border-box",
                  top: errors.firstName ? "25%" : "36%",
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
                placeholder="firstName"
                style={{
                  height: "40px",
                  boxSizing: "border-box",
                  paddingLeft: "2.5em",
                  width: "100%",
                }}
                {...register("firstName")}
              />
              <p style={{ color: "red" }}>{errors.firstName?.message}</p>
            </div>
            <div
              style={{
                position: "relative",
                margin: "20px 0px 20px 0px",
                width: "220px",
              }}
            >
              <div
                style={{
                  padding: "0px 10px 0px 10px",
                  height: "40px",
                  borderRight: "1px solid grey",
                  position: "absolute",
                  boxSizing: "border-box",
                  top: errors.lastName ? "25%" : "36%",
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
                placeholder="lastName"
                style={{
                  height: "40px",
                  boxSizing: "border-box",
                  paddingLeft: "2.5em",
                  width: "100%",
                }}
                {...register("lastName")}
              />
              <p style={{ color: "red" }}>{errors.lastName?.message}</p>
            </div>
          </span>
          <div
            style={{
              position: "relative",
              width: "450px",
            }}
          >
            <div
              style={{
                padding: "0px 10px 0px 10px",
                height: "40px",
                borderRight: "1px solid grey",
                position: "absolute",
                boxSizing: "border-box",
                top: errors.age ? "31%" : "50%",
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
              placeholder="age"
              style={{
                height: "40px",
                boxSizing: "border-box",
                paddingLeft: "2.5em",
                width: "100%",
              }}
              {...register("age")}
            />
            <p style={{ color: "red" }}>{errors.age?.message}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            <div style={{ padding: "10px 10px 0px 10px" }}>
              <input
                type="radio"
                name="gender"
                value="male"
                {...register("gender")}
              />
              <label style={{ margin: "0px 10px 0px 10px" }}>Male</label>
            </div>
            <div style={{ padding: "10px 20px 0px 20px" }}>
              <input
                type="radio"
                name="gender"
                value="female"
                {...register("gender")}
              />
              <label style={{ margin: "0px 10px 0px 10px" }}>Female</label>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              margin: "10px 0px 0px 0px",
              width: "450px",
            }}
          >
            <div
              style={{
                padding: "0px 10px 0px 10px",
                height: "40px",
                borderRight: "1px solid grey",
                position: "absolute",
                boxSizing: "border-box",
                top: errors.phoneNumber ? "31%" : "50%",
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BsPhoneFill />
            </div>
            <input
              type="text"
              placeholder="phoneNumber"
              style={{
                height: "40px",
                boxSizing: "border-box",
                paddingLeft: "2.5em",
                width: "100%",
              }}
              {...register("phoneNumber")}
            />
            <p style={{ color: "red" }}>{errors.phoneNumber?.message}</p>
          </div>

          <div style={{ padding: "15px 0px" }}>
            <select
              style={{}}
              {...register("role")}
              onChange={(e) => doSomething(e.target.value)}
            >
              <option value="">Select a role</option>
              <option value="PATIENT">Patient</option>
              <option value="PHYSICIAN">Physician</option>
              <option value="PHARMACIST">Pharmacist</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
          <div
            style={{
              width: "450px",
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
              Register
            </button>
          </div>
        </form>
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
