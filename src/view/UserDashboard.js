import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./tables";

const DashboardUser = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const roleId = JSON.parse(localStorage.getItem("role"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    if (!roleId) return navigate("/");
    const data = await fetch(`http://localhost:5000/api/v1/${roleId}`, {
      method: "GET",
      header: { "Content-Type": "application/json" },
    });
    const response = await data.json();
    if (response.data && response.message) {
      setData(response.data);
    } else {
      console.log("we have no data");
    }
  };
  useEffect(() => {
    fetchData();
    if (
      roleId === "PATIENT" ||
      roleId === "PHARMACIST" ||
      roleId === "PHYSICIAN"
    ) {
      return navigate("/dashboard/user");
    } else {
      return navigate("/dashboard/admin");
    }
  }, []);
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
        {roleId === "PATIENT"
          ? "Patient illinesses "
          : roleId === "PHARMACIST"
          ? "Most bought drugs"
          : roleId === "PHYSICIAN"
          ? "Physician"
          : "Admin "}
      </p>
      <Table data={data} />
    </div>
  );
};
export default DashboardUser;
