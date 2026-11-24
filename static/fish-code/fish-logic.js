'use strict';

"use strict";
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
} //koodi mozillan docseista, mutta ymmärrän koodin toiminnan itse

var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");
  elem.style.top = getRandomInt(0, 350) + 'px';
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5); /*kalojen nopeus. mitä pienempi luku sitä nopeempi*/
  function frame() {
    if (pos == 287) {
      clearInterval(id);
    } else {
      pos++;        
      elem.style.left = pos + 'px'; 
    }
  }
}