import React from "react";

export const Button = ({
  title,
  custom,
  onClick,
  navBar,
  navBarWidth,
  radius,
}) => {
  return (
    <div
      style={{
        width: custom ? custom : navBarWidth ? navBarWidth : "450px",
        border: navBar ? "2px solid white" : "none",
        borderRadius: radius ? radius : "none",
      }}
    >
      <button
        style={{
          backgroundColor: navBar ? "transparent" : "#CB8B0E",
          padding: "10px",
          border: "none",
          width: "100%",
          color: "white",
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};
