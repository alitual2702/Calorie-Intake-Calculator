import React, { useEffect, useRef, useState } from "react";
import "./nutrition.css";
import Dlist from "./Diet folder/Dlist";
import Cal from "./Calories folder/Cal";

const Diet = () => {

  const [condition, setcondition] = useState(true);
  
  let dietRef = useRef(null);
  let calRef = useRef(null);

 useEffect(() => {
    dietRef.current.classList.add("pur");
 }, [])
 

  const handleClick = (event) => {
    if (event.target.innerHTML == "Your Calories") {
      setcondition(false);
      calRef.current.classList.add("cyan");
      dietRef.current.classList.remove("pur");
    } else {
      setcondition(true);
      calRef.current.classList.remove("cyan");
      dietRef.current.classList.add("pur");
    }
  };


  return (
    <div className="diet-wrapper">
      <div className="btn-sec">
        <button
          ref={dietRef}
          onClick={(e) => handleClick(e)}
          className="check-diet"
        >
          Snacks List
        </button>
        <button
          ref={calRef}
          onClick={(e) => handleClick(e)}
          className="check-calories"
        >
          Calories Intake
        </button>
      </div>
      <div className="main-content">
        {condition == true ? <Dlist /> : <Cal />}
      </div>
    </div>
  );
};

export default Diet;
