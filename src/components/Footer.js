import React from "react";
import Social from "./Social";

const Footer = () => {
  return (
    <div
      style={{ width: "100%", minHeight: "138px", backgroundColor: "#CB8B0E" }}
    >
      <Social />
      <p style={{ color: "white" }}>
        Powered by @<span style={{ fontStyle: "italic" }}>richmunye</span>
      </p>
    </div>
  );
};
export default Footer;
