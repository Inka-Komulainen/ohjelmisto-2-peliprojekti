'use strict';

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

var id = null;
function myMove() {
  const smallfish = { //information for every fish, with height and position information as well as id
    id: 'smallfish',
    speed: 2,
    maxheight: 440,
    finpos: 887,
  };
  const mediumfish = {
    id: 'mediumfish',
    speed: 3.5,
    maxheight: 413,
    finpos: 835,
  };
  const bigfish = {
    id: 'bigfish',
    speed: 5,
    maxheight: 150,
    finpos: 652,
  };

  const fishlist = [smallfish, mediumfish, bigfish]; //every fish listed for random selection

  const fishselect = fishlist[getRandomInt(0, 3)];

  var elem = document.getElementById(`${fishselect.id}`);
  elem.style.top = getRandomInt(0, `${fishselect.maxheight}`) + 'px';
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, `${fishselect.speed}`); //fish speed, the lower number the faster
  function frame() {
    if (pos == `${fishselect.finpos}`) { //if fish position close enough to edge, stop movement
      clearInterval(id);
    } else {
      pos++;        
      elem.style.left = pos + 'px'; 
    }
  }
}