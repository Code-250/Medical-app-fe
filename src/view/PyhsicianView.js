import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./tables";

const PhysicianView = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const roleId = JSON.parse(localStorage.getItem("role"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    if (!roleId) return navigate("/");
    const data = await fetch(`http://localhost:5000/api/v1/PHYSICIAN`, {
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
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 20,
        paddingBottom: 50,
      }}
    >
      <p style={{ paddingLeft: 60, fontSize: 20, fontWeight: "700" }}>
        Physician Mission
      </p>
      <Table data={data} />
    </div>
  );
};
export default PhysicianView;
