import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Dashboard = () => {
  return (
    <div style={{ height: "100vh" }}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Dashboard;
