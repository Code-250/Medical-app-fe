import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import RegisterPage from "./view/registerView";
import LoginPage from "./view/loginView";
import Dashboard from "./view/layout";
import AdminView from "./view/Admin";
import DashboardUser from "./view/UserDashboard";

function App() {
  const roleId = JSON.parse(localStorage.getItem("role"));
  if (roleId === "PATIENT") {
    console.log(roleId);
  }
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/dashboard/*" exact element={<Dashboard />}>
            <Route
              exact
              path=""
              element={
                roleId === "ADMIN" ? (
                  <Navigate to="admin" />
                ) : (
                  <Navigate to="user" />
                )
              }
            />
            <Route path="user" exact element={<DashboardUser />} />
            <Route path="admin" exact element={<AdminView />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
