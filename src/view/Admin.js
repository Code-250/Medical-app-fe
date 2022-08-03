import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientView from "./PatientVIew";
import PharmacyView from "./PharmacistView";
import PhysicianView from "./PyhsicianView";

const AdminView = () => {
  const roleId = JSON.parse(localStorage.getItem("role"));
  const navigate = useNavigate();
  if (roleId === "ADMIN") {
    console.log("hell world");
  }
  useEffect(() => {
    if (roleId !== "ADMIN") return navigate("/dashboard/user");
  }, []);
  return (
    <div>
      <PatientView />
      <PharmacyView />
      <PhysicianView />
    </div>
  );
};
export default AdminView;
