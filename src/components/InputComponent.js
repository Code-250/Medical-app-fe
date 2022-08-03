import React from "react";

const Input = ({
  type,
  value,
  placeholder,
  children,
  custom,
  name,
  onChange,
  customMargin,
  register,
}) => {
  return (
    <div
      style={{
        position: "relative",
        margin: customMargin ? customMargin : "20px 0px 20px 0px",
        width: custom ? custom : "450px",
      }}
    >
      <div
        style={{
          padding: "0px 10px 0px 10px",
          height: "40px",
          borderRight: "1px solid grey",
          position: "absolute",
          boxSizing: "border-box",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        style={{
          height: "40px",
          boxSizing: "border-box",
          paddingLeft: "2.5em",
          width: "100%",
        }}
        {...register(name)}
      />
    </div>
  );
};
export default Input;
