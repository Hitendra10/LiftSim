const EleNum = (floorTopEdge) => {
  const eleArray = ["elevator1", "elevator2", "elevator3", "elevator4"];
  const eleArrayDist = [];
  const scroll = document.documentElement.scrollTop;
  //let liftOnMove = false;
  eleArray.map((w) => {
    const ele = document.getElementById(w);
    const elePos = Math.round(ele.getBoundingClientRect().y + scroll);
    const dist = Math.round(Math.abs(floorTopEdge - elePos));
    return eleArrayDist.push(dist);
  });

  const min = Math.min(...eleArrayDist);
  const indx = eleArrayDist.indexOf(min);
  const liftElement = document.getElementById(eleArray[indx]);
  const liftHeight = liftElement.clientHeight;
 
  function Move() {
    const liftSent = liftElement;
    (liftSent.style.transition =
      "top " + Math.round(min / liftHeight)*3 + "s") &&
      (liftSent.style.top = -20 + floorTopEdge + "px");
  }

  return Move();
};
export default EleNum;
