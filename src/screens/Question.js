import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { question } from "../Data/Data";
function Question() {
  const navigate = useNavigate();
  let { lang } = useParams();

  const [allQuestions, setallQuestions] = useState(question[lang]);
  let data = question[lang];
  const handleClick = (elem, option) => {
    console.log({ option, elem });
    const selectedObj = allQuestions.find((x) => x.id === elem.id);
    selectedObj.selectedOption = option;
    setallQuestions([...allQuestions]);
    console.log({ allQuestions });
  };

  const handleSubmitClick = () => {
    let score = 0;
    for (let i = 0; i < allQuestions.length; i++) {
      let res = allQuestions[i].selectedOption === allQuestions[i].ans;
      if (res) {
        score += 1;
      }
    }
    localStorage.setItem("score", score);
    navigate(`/score`);
    // console.log({ score });
  };

  return (
    <>
      {/* <hr /> */}
      {/* <h1 id="j">h1</h1> */}
      <h2 style={{ marginLeft: "29vw" }}>Welcome to {lang} Questions</h2>
      <div className="question__container">
        <div className="question">
          {data?.map((elem, i) => {
            return (
              <div className="ques" key={elem.id}>
                <h4>
                  Q{elem.id}. {elem.ques}
                </h4>
                {elem.options.map((option, y) => (
                  <div className="btn" key={y}>
                    <button
                      style={{
                        background: elem.selectedOption === option && "#199dd9",
                        borderRadius: "5px",
                        padding: "3px",
                        color: elem.selectedOption === option && "white",
                      }}
                      onClick={() => handleClick(elem, option)}
                    >
                      {option}
                    </button>
                    <br />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <button className="btn_button" onClick={() => handleSubmitClick()}>
        Submit
      </button>
    </>
  );
}

export default Question;
