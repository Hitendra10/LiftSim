import React from "react";
import "./App.css";
import Floor from "./components/Floor";
import Floors from "./components/Floors";
import GoToFloor from "./Function/GoToFloor";

function App() {
  const [lastFloor, setLastFloor] = React.useState("0"+5);

  function initialState() {
    const eleArray = ["elevator1", "elevator2", "elevator3", "elevator4"];
    eleArray.map((q) => {
      let liftElement = document.getElementById(q);
      let floorElement = document.getElementById("floorNumber01");
      let scroll = document.documentElement.scrollTop;
      let floorTopEdge = Math.round(
        floorElement.getBoundingClientRect().y + scroll
      );
      //console.log(q + " distance from top:  " + floorTopEdge);
      return (
        (liftElement.style.transition =
          "top " + 2 + "s") &&
        (liftElement.style.top = -15 + floorTopEdge + "px")
      );
    });
  }

  React.useEffect(() => {
    initialState();
  });

  function getValue() {
    const inputEle = document.getElementById("inputId");
    const inputVal = inputEle.value;
    return inputVal < 10
      ? setLastFloor("0" + inputVal)
      : setLastFloor(inputVal);
  }

  return (
    <div className="App">
      <h1>Lift Simulation</h1>
      <input type="text" placeholder="Number of Floor  " id="inputId" />
      <button type="button" onClick={() => getValue()}>
        Submit
      </button>
      <div className="building">
        <Floor
          level={lastFloor}
          downBtn={true}
          onClick={(e) => {
            GoToFloor(e);
          }}
        />

        <Floors lastFloor={lastFloor} />

        <Floor
          level="01"
          upBtn={true}
          onClick={(e) => {
            GoToFloor(e);
          }}
        />
      </div>
      <div className="elevator ele1" id="elevator1">
        \_ (O_O)"_/
      </div>
      <div className="elevator ele2" id="elevator2">
        ._/(X_X)\_,
      </div>
      <div className="elevator ele3" id="elevator3">
        \_ (O_x)"_/
      </div>
      <div className="elevator ele4" id="elevator4">
        . . . (b_d) . . .
      </div>
    </div>
  );
}

export default App;
