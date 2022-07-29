import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import RegisterPage from "./view/registerView";
import LoginPage from "./view/loginView";
import Dashboard from "./view/layout";
import PatientView from "./view/PatientVIew";
import PharmacyView from "./view/PharmacistView";
import PhysicianView from "./view/PyhsicianView";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/dashboard/*" exact element={<Dashboard />}>
            <Route
              exact
              path=""
              element={<Navigate to="patient" replace="true" />}
            />
            <Route path="patient" exact element={<PatientView />} />
            <Route path="pharmacy" exact element={<PharmacyView />} />
            <Route path="physician" exact element={<PhysicianView />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
