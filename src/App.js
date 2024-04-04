import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AddCompanyForm from "./Pages/AddCompanyForm";
import EditCompanyForm from "./Pages/EditCompanyForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Layout onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-company" element={<AddCompanyForm />} />
        <Route path="/edit-company/:companyId" element={<EditCompanyForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
