import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";
import AddDetails from "./pages/add_details/addDetails";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    console.log(user);
  }
  
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Navigate to="/home"/> : <Navigate to="login" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adddetails" element={<AddDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
