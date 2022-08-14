import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarMain from "./components/Navbar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Router>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/" element={<Tour></Tour>}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
