import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Score() {
  //   const location = useLocation();
  let score = localStorage.getItem("score");
  let navigate = useNavigate();
  let hanleClick = () => {
    navigate("/home");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="ques ques_1">
      <h1>Your Score Is</h1>
      <h3>{!score ? "0/10" : `${score}/10`}</h3>
      <button className="btn_buttons" onClick={hanleClick}>
        Back To Home
      </button>
    </div>
  );
}

export default Score;
