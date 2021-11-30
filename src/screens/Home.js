import React from "react";
import { lag } from "../Data/Data";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/home/${id}`);
  };

  return (
    <>
      <div className="lan_container">
        {lag.map((elem, i) => (
          <div className="tab__container">
            <button onClick={() => handleClick(elem.language)}>
              {elem.language}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
