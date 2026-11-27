"use strict";

// hook code starts here
function checkOverlap(hook) {
  const hookBorder = hook.getBoundingClientRect();
  const fishBorder = fish.getBoundingClientRect(); // check that this matches

  return !(
    hookBorder.top > fishBorder.bottom ||
    hookBorder.bottom < fishBorder.hookBorder.right < fishBorder.left ||
    top ||
    hookBorder.left > fishBorder.right
  );
}

function hookCatch() {
  let hook = document.getElementById("hook");
  hook.classList.remove("triangle-down"); // check that style matches
  hook.classList.add("reel");

  let reelLength = 4;
  let touchBorder = false;

  const reel = setInterval(function () {
    hook.style.height = reelLength + "px";

    if (reelLength <= 4) {
      // when reel is back at starting position it starts the rotation again
      clearInterval(reel);
      hook.classList.remove("reel"); //check that style matches
      hook.classList.add("triangle-down");
      hookRotation();
    }

    if (reelLength == 200) {
      // insert here at which point reel returns
      touchBorder = true;
    }
    if (touchBorder == false) {
      reelLength += 1; // reeling speed adjust here
    } else {
      reelLength -= 1; // reeling speed adjust here
    }

    let isOverlap = checkOverlap(hook); // checks if hook and fish elements are overlapping
    if (isOverlap == true) {
      // insert here what happens when fish is caught
      alert("voitit!");
    }
  }, 1);
}

function hookRotation() {
  let degree = 0;
  let timesLeft = 0;
  let timesRight = 0;
  var rotator = setInterval(function () {
    let hook = document.getElementById("hook");
    hook.style.transform = `rotate(${degree}deg)`;

    //the hook can rotate right only once it has fully moved to the left and vice versa
    // in starting position (0deg) hook points straight down
    if (degree == 90) {
      // set how far the hook rotates to left here
      timesLeft += 1;
    }
    if (degree == -90) {
      // set how far the hook rotates to right here
      timesRight += 1;
    }

    if (timesLeft == timesRight) {
      degree += 1;
    } else {
      degree -= 1;
    }
  }, 1);

  const hook = document.getElementById("lake"); //stops the rotation when gamescreen clicked
  hook.addEventListener("click", (event) => {
    clearInterval(rotator);
    hookCatch();
  });
}
// hook code ends here

function startTimer() {
  let time = 30; // set time here
  const timer = setInterval(function () {
    let timerDisplay = document.getElementById("timer"); //make sure the id matches in final html
    timerDisplay.innerHTML = time + "s";
    time -= 1;
    if (time < 0) {
      // time over
      clearInterval(timer);
      timerDisplay.innerHTML = "time over!";
    }
  }, 1000);
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

var id = null;
function myMove() {
  const smallfish = {
    //information for every fish, with height and position information as well as id
    id: "smallfish",
    speed: 2,
    maxheight: 440,
    finpos: 887,
  };
  const mediumfish = {
    id: "mediumfish",
    speed: 3.5,
    maxheight: 413,
    finpos: 835,
  };
  const bigfish = {
    id: "bigfish",
    speed: 5,
    maxheight: 406,
    finpos: 713,
  };

  const fishlist = [smallfish, mediumfish, bigfish]; //every fish listed for random selection

  const fishselect = fishlist[getRandomInt(0, 3)];

  var elem = document.createElement("div");
  elem.id = `${fishselect.id}`;
  var parent = document.getElementById("lake");
  parent.appendChild(elem);
  elem.style.top = getRandomInt(0, `${fishselect.maxheight}`) + "px";
  var pos = 0;
  const rightorleft = getRandomInt(0,2);
  

  
  id = setInterval(moveright, `${fishselect.speed}`); //fish speed, the lower number the faster
  function moveright() {
    if (pos == `${fishselect.finpos}`) {
      //if fish position close enough to edge, reset to left. so the fish starts new loop
      parent.removeChild(elem);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }
}

function login() {
  var agecheck = Number(document.getElementById("age").value);
  if (agecheck >= 12) {
    window.location.href = "gofish_page2.html";
  }
}

//this is only for test purposes. tie timer to game start when implementing :DD
const button = document.getElementById("start");
button.addEventListener("click", startTimer);
