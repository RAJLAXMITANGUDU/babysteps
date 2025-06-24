import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import MilestoneDashboard from "./components/Milestone/MilestoneList";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MilestoneList from "./components/Milestone/MilestoneList";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/milestones" element={<MilestoneList />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
