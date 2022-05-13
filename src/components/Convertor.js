import React, { useState } from "react";
var colorset = {
  color: "red",
};
function Convertor() {
  const handleOnChange = (event) => {
    // console.log("Value changed");
    let newcel = event.target.value;
    setcel(newcel);
    setfar((newcel * 9) / 5 + 32);
    tempchecker(newcel);
  };
  function tempchecker(val) {
    if (val >= 36.5 && val <= 37.5) {
      document.getElementById("indicator").innerHTML =
        "Normal Body Temerature!";
      colorset = {
        color: "yellow",
      };
    } else if (val >= 38) {
      document.getElementById("indicator").innerHTML =
        "It's getting Hot in here!";
      colorset = {
        color: "red",
      };
    } else if (val <= 10) {
      document.getElementById("indicator").innerHTML = "Ahhh...Freezing!";
      colorset = {
        color: "blue",
      };
    } else {
      document.getElementById("indicator").innerHTML = "Great Climate!";
      colorset = {
        color: "green",
      };
    }
  }

  const handleOnChange1 = (event) => {
    // console.log("Value1 changed");
    let newfar = event.target.value;
    setfar(newfar);
    let newcel = ((newfar - 32) * 5) / 9;
    setcel(newcel);
    tempchecker(newcel);
  };

  const [cel, setcel] = useState(0);
  const [far, setfar] = useState(0);

  return (
    <div>
      <h1>Temperature Convertor using React</h1>
      <div>
        <label htmlFor="Celcius">Temperature in Celcius :</label>
        <input
          className="Celcius"
          type="number"
          value={cel}
          id="Celcius"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="Fahrenheit">Temperature in Fahrenheit :</label>
        <input
          className="Fahrenheit"
          type="number"
          value={far}
          id="Fahrenheit"
          onChange={handleOnChange1}
        />
      </div>
      <p id="indicator" style={colorset}></p>
    </div>
  );
}

export default Convertor;
