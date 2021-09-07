const eleBusy = [];

//gets the floor top edge distance and finds the elevator closer to it
function ElevatorNum(floorTopEdge, elevatorArray) {

  const eleNotBusy = [];
  const scrolledDistance = document.documentElement.scrollTop;
  const elevatorArrayDist = [];

  elevatorArray.map((e) => {
    if (!eleBusy.includes(e)) {
      return eleNotBusy.push(e);
    }
  });

if(eleNotBusy.length!==0){
  //
  //finds distance of elevator from the top of the webpage and appends to an array
  eleNotBusy.map((w) => {
    const ele = document.getElementById(w);
    const elePos = Math.round(ele.getBoundingClientRect().y + scrolledDistance);
    const dist = Math.round(Math.abs(floorTopEdge - elePos));

    return elevatorArrayDist.push(dist);
  });

  //finds minimum distance from the array
  const min = Math.min(...elevatorArrayDist);
  const indx = elevatorArrayDist.indexOf(min);
  const eleElement = document.getElementById(eleNotBusy[indx]);

  function Move() {
    //changes the css of the targeted elevator (speed and top distance)
    const eleSent = eleElement;
    eleSent.style.transition = `top ${Math.round(min / 75)}s`;
    //for 2sec per floor speed devide by 75
    //for 1sec per floor speed devide by 150
    eleSent.style.top = `${-20 + floorTopEdge}px`;
    if (!eleBusy.includes(eleElement.id)) {
      eleBusy.push(eleElement.id);
    }
  }

  //
  //assign the call of user to an idle elevator
  //
  //remove elevator ID from liftBusy[]
  function removeBusy() {
    eleBusy.splice(0, 1);
  }
  setTimeout(() => {
    removeBusy();
  }, (min / 75) * 1000);

  Move();
}else{
  alert("Elevators are busy please wait")
}
}

export default ElevatorNum;
