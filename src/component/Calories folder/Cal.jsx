import React, { useState } from "react";
import "./calories_styles.css";
const Cal = () => {
  // State Managing
  const [fordisplay, setfordisplay] = useState(false);
  const [gender, setgender] = useState(null);
  const [heightf, setheightf] = useState(null);
  const [heighti, setheighti] = useState(null);
  const [weight, setweight] = useState(null);
  const [byage, setbyage] = useState(null);
  const [info, setinfo] = useState(null);
  const [totalcalories, settotalcalories] = useState("");
  const [userRequired, setuserRequired] = useState("");

  // Submit Handling

  const handleSubmition = (e) => {
    e.preventDefault();
    if (
      gender == null ||
      heightf == null ||
      heighti == null ||
      weight == null ||
      byage == null ||
      info == null
    ) {
      alert("Opppsssss!....");
    } else {
      let feetinchToMeters = heightf * 0.3048 + heighti * 0.0254;
      if (gender == "male") {
        let forMen =
          9.65 * weight + 573 * feetinchToMeters - 5.08 * byage + 260;
        settotalcalories(forMen.toFixed(2));
      } else if (gender == "female") {
        let forWomen =
          7.38 * weight + 607 * feetinchToMeters - 2.31 * byage + 43;
        settotalcalories(forWomen.toFixed(2));
      }

      if (info == "loss") {
        setuserRequired(`${weight * 22} calories for Loss... `);
      } else if (info == "gain") {
        setuserRequired(`${weight * 25} calories for Gain... `);
      } else if (info == "maintain") {
        setuserRequired(`${weight * 24} calories for Maintain... `);
      }

      setfordisplay(true);
    }
  };
  return (
    <div className="cal-section">
      <form onSubmit={handleSubmition} className="calories-intake">
        <label htmlFor="snacks">
          Gender :
          <select
            id="pro"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
          >
            <option value="select" selected>
              Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label htmlFor="snacks">
          Height :
          <input
            type="number"
            placeholder="feet"
            value={heightf}
            onChange={(e) => setheightf(e.target.value)}
          />
          <input
            type="number"
            placeholder="inch"
            value={heighti}
            onChange={(e) => setheighti(e.target.value)}
          />
        </label>

        <label htmlFor="cal-amm">
          Weight :
          <input
            type="number"
            value={weight}
            placeholder="kg"
            onChange={(e) => setweight(e.target.value)}
          />
        </label>

        <label htmlFor="fat">
          Age :
          <input
            type="number"
            value={byage}
            onChange={(e) => setbyage(e.target.value)}
          />
        </label>

        <label htmlFor="pro">
          What You Want :
          <select
            id="pro"
            value={info}
            onChange={(e) => setinfo(e.target.value)}
          >
            <option value="select" selected>
              Select
            </option>
            <option value="loss">Loss</option>
            <option value="maintain">Maintain</option>
            <option value="gain">Gain</option>
          </select>
        </label>

        <button className="calculate">Calculate</button>
      </form>

      {fordisplay == true ? (
        <div className="result-of-calculation">
          <h2>Result</h2>
          <h3>Calories Intake : {totalcalories}</h3>
          <h3>{userRequired}</h3>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cal;
