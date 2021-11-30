import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Question from "./screens/Question";
import Score from "./screens/Score";
function Routers() {
  return (
    <div>
      <Routes>
        <Route strict exact={true} path="/home" element={<Home />} />
        <Route strict exact={true} path="/" element={<Login />} />
        <Route strict exact={true} path="/home/:lang" element={<Question />} />
        <Route strict exact={true} path="/score" element={<Score />} />
      </Routes>
    </div>
  );
}

export default Routers;
