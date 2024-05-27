import React, { useEffect, useState } from "react";
import itemsofMeals from "./Objdata";
const Dlist = () => {
  // ------------------------  All States

  const [snacks, setsnackState] = useState("");
  const [calories, setcalState] = useState("");
  const [fats, setfatState] = useState("");
  const [proteins, setproState] = useState("");
  const [carbohydrates, setcarbState] = useState("");
  const [time, settimeState] = useState("");
  const [dataAll, setdataAll] = useState([]);

  //  -------------------------  Use Effect

  useEffect(() => {
    setdataAll([...itemsofMeals]);
   

  }, []);
 

  //   Handle OnSubmit Function



  const handleSubmit = (e) => {
    e.preventDefault();
    let objData = {
      snacks,
      calories,
      fats,
      proteins,
      carbohydrates,
      time,
    };

    if (
      snacks == "" ||
      calories == "" ||
      fats == "" ||
      proteins == "" ||
      carbohydrates == "" ||
      time == ""
    ) {
      alert("Please fill the fields...");
    } else {
      
      setdataAll([...dataAll, objData]);
      setsnackState("");
      setcalState("");
      setfatState("");
      setproState("");
      setcarbState("");
      settimeState("");
    }
  };
  // handling Delete Items
  const deleteBtn = (event) => {
    let deletedList = dataAll.filter((items, indexId) => {
      return indexId != event;
    });

    setdataAll([...deletedList]);
  };

  return (
    <div className="diet-section">
      <form onSubmit={handleSubmit}>
        <label htmlFor="snacks">
          Snacks :
          <input
            type="text"
            id="snacks"
            value={snacks}
            autoComplete="off"
            onChange={(e) => setsnackState(e.target.value)}
          />
        </label>

        <label htmlFor="cal-amm">
          Calories :
          <input
            type="text"
            id="cal-amm"
            autoComplete="off"
            value={calories}
            onChange={(e) => setcalState(e.target.value)}
          />
        </label>

        <label htmlFor="fat">
          Fats :
          <input
            type="text"
            id="fat"
            autoComplete="off"
            value={fats}
            onChange={(e) => setfatState(e.target.value)}
          />
        </label>

        <label htmlFor="pro">
          Proteins :
          <input
            type="text"
            autoComplete="off"
            id="pro"
            value={proteins}
            onChange={(e) => setproState(e.target.value)}
          />
        </label>

        <label htmlFor="carbo-hyd">
          Carbohydrates :
          <input
            autoComplete="off"
            type="text"
            id="carbo-hyd"
            value={carbohydrates}
            onChange={(e) => setcarbState(e.target.value)}
          />
        </label>

        <label htmlFor="dtime">
          Time :
          <input
            type="time"
            autoComplete="off"
            id="dtime"
            value={time}
            onChange={(e) => settimeState(e.target.value)}
          />
        </label>

        <button className="add">Add Item</button>
      </form>

      {/* ----------------------- */}

      {/* Items List */}
      <div className="lists-of-diets">
        {dataAll.map((items, index) => {
          return (
            <div className="item-lists-all" key={index}>
              <p className="itemList">
                1. Snacks: <strong>{items.snacks}</strong>
              </p>
              <p className="itemList">
                2. Calories: <strong>{items.calories}g</strong>
              </p>
              <p className="itemList">
                3. Fats: <strong>{items.fats}g</strong>
              </p>
              <p className="itemList">
                4. Proteins: <strong>{items.proteins}g</strong>
              </p>
              <p className="itemList">
                5. Carbohydrates: <strong>{items.carbohydrates}g</strong>
              </p>
              <p className="itemList">
                6. Time: <strong>{items.time}</strong>
              </p>
              <button onClick={() => deleteBtn(index)} className="delete-item">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dlist;
