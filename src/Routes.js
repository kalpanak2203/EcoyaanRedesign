import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Home";
import App from "./App";

const RoutesPath = () => {
  return (
      <div>
          <Routes>
              <Route path='/Home'  element={<Home/>}>
              </Route>
              <Route path='/' element={<App/>}>
              </Route>
              <Route path='/AboutUs' element={<App/>}>
              </Route>
          </Routes>
      </div>
  );
};


export default RoutesPath