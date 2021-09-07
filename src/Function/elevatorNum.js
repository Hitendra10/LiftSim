const eleBusy = [];

//gets the floor top edge distance and finds the elevator closer to it
function ElevatorNum(floorTopEdge, elevatorArray) {

  elevatorArray.filter((item) => {
    return console.log(item !== eleBusy[item]);
  });

  let busy = false;
  const scrolledDistance = document.documentElement.scrollTop;
  const elevatorArrayDist = [];

  //finds distance of elevator from the top of the webpage and appends to an array
  elevatorArray.map((w) => {
    const ele = document.getElementById(w);
    const elePos = Math.round(ele.getBoundingClientRect().y + scrolledDistance);
    const dist = Math.round(Math.abs(floorTopEdge - elePos));

    return elevatorArrayDist.push(dist);
  });

  //finds minimum distance from the array
  const min = Math.min(...elevatorArrayDist);
  const indx = elevatorArrayDist.indexOf(min);
  //targets the elevator with least distance from the array
  const eleElement = document.getElementById(elevatorArray[indx]);


  function Move() {
    //changes the css of the targeted elevator (speed and top distance)
    const eleSent = eleElement;
    eleSent.style.transition = `top ${Math.round(min / 75)}s`;
    //for 2sec per floor speed devide by 75
    //for 1sec per floor speed devide by 150
    eleSent.style.top = `${-20 + floorTopEdge}px`;

    eleBusy.push(eleElement.id);
  }

  //
  //assign the call of user to an idle elevator
  //

  elevatorArrayDist.map((i) => {
    if (eleElement.id === eleBusy[i]) {
      return (busy = true);
    } else {
      return (busy = false);
    }
  });

  //remove elevator ID from liftBusy[]
  function removeBusy() {
    eleBusy.splice(0, 1);
    //console.log(elevatorArray);
  }
  setTimeout(() => {
    removeBusy();
    console.log("removed from busy " + eleBusy);
  }, min * 20);
  console.log("added to busy " + eleBusy);

  if (busy === true) {
    alert("Busy");
  } else {
    return Move();
  }
}

export default ElevatorNum;
