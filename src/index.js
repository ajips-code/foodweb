import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Favorite from "./components/favorite";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouteApp/>
);

