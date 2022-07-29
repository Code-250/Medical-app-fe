import React from "react";
import Table from "./tables";

const PharmacyView = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "76vh",
        padding: 50,
      }}
    >
      <p style={{ paddingLeft: 60, fontSize: 20, fontWeight: "700" }}>
        Most bought Drugs
      </p>
      <Table />
    </div>
  );
};
export default PharmacyView;
