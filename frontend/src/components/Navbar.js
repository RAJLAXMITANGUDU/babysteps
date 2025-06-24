import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };
  return (
    <nav>
      <h1>BabySteps</h1>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
