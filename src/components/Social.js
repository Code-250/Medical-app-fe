import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "column",
        paddingRight: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingRight: "130px",
        }}
      >
        <h2 style={{ color: "white", fontWeight: "500" }}>Contact Us</h2>
        <div
          style={{ width: "100%", height: "2px", backgroundColor: "white" }}
        ></div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
          }}
        >
          <ImFacebook
            style={{ paddingRight: "5px", fontSize: "20px" }}
            size={30}
            color="white"
          />
          <p
            style={{
              margin: 0,
              color: "white",
              fontWeight: "400",
              fontSize: 20,
            }}
          >
            facebook
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            fontSize: "20px",
          }}
        >
          <AiFillInstagram
            style={{ paddingRight: "5px", fontSize: "20px" }}
            size={30}
            color="white"
          />
          <p
            style={{
              margin: 0,
              color: "white",
              fontWeight: "400",
              fontSize: 20,
            }}
          >
            Instagram
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaTwitter
            style={{ paddingRight: "5px", fontSize: "20px" }}
            size={30}
            color="white"
          />
          <p
            style={{
              margin: 0,
              color: "white",
              fontWeight: "400",
              fontSize: 20,
            }}
          >
            Twitter
          </p>
        </div>
      </div>
    </div>
  );
};
export default Social;
