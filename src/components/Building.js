import React from "react";
import "../App.css";
import Floor from "../components/Floor";
import Floors from "../components/Floors";
import goToFloor from "../Function/GoToFloor";
import Elevators from "./Elevators";

function Building() {
  const [lastFloor, setLastFloor] = React.useState(`0${5}`);
  const [elevatorCount, setElevatorCount] = React.useState(4);

  React.useEffect(() => {
    initialState();
  });

  //generate array of elevator id from initial data or input data
  const elevatorArray = [];
  for (let i = 1; i <= elevatorCount; i++) {
    if (i > 9) {
      elevatorArray.push(`elevator${i}`);
    } else {
      elevatorArray.push(`elevator0${i}`);
    }
  }

  //when page refreshed send elevators to 1st floor
  function initialState() {
    elevatorArray.map((item) => {
      const elevatorElement = document.getElementById(item);
      const floorElement = document.getElementById("floorNumber01");
      const scrolledDistance = document.documentElement.scrollTop;
      const floorTopEdge = Math.round(
        floorElement.getBoundingClientRect().y + scrolledDistance
      );
      return (
        (elevatorElement.style.transition = `top ${2}s`) &&
        (elevatorElement.style.top = `${-15 + floorTopEdge}px`) &&
        (elevatorElement.style.left = `${item[8]}${item[9] + 99}px`)
      );
    });
  }

  //function to process inputs from user
  //Floor count
  function getValueFloor() {
    const inputFloor = document.getElementById("inputIdFloor");
    const inputVal = inputFloor.value;
    return inputVal < 10
      ? setLastFloor("0" + inputVal)
      : setLastFloor(inputVal);
  }
  //Elevator count
  function getValueElevator() {
    const inputElevator = document.getElementById("inputIdEle");
    const inputValEle = inputElevator.value;
    return setElevatorCount(inputValEle);
  }

  return (
    <>
      <div className="App">
        <h1>Lift Simulation.</h1>
        <h4>
          <a href="https://github.com/Hitendra10/LiftSim.git">GitHub Repo</a>
        </h4>
        <input type="text" placeholder="Number of Floors  " id="inputIdFloor" />
        <button type="button" onClick={() => getValueFloor()}>
          Submit
        </button>
        <input type="text" placeholder="Number of Elevator  " id="inputIdEle" />
        <button type="button" onClick={() => getValueElevator()}>
          Submit
        </button>
        <div className="building">
          {/* Top Floor */}
          <Floor
            level={lastFloor}
            downBtn={true}
            onClick={(e) => {
              goToFloor(e, elevatorArray);
            }}
          />

          {/* floor replected on user input */}
          <Floors lastFloor={lastFloor} elevatorArray={elevatorArray} />

          {/* Ground Floor */}
          <Floor
            level="01"
            upBtn={true}
            onClick={(e) => {
              goToFloor(e, elevatorArray);
            }}
          />
        </div>
        <Elevators elevatorArray={elevatorArray} />
      </div>
    </>
  );
}

export default Building;
