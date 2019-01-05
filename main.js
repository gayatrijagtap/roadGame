let timer;
let car1int, car2int, car3int, car4int;

let interval;
let scale;

const carMove = function(
  obstracle,
  obstracleTop,
  obstracleMargin,
  obstracleMarginDecr,
  range,
  leftMargin,
  operator
) {
  scale = 1;
  interval = setInterval(() => {
    obstracleStyle = document.getElementById(obstracle).style;
    obstracleStyle.display = "inline";
    obstracleStyle.top = obstracleTop + "px";
    obstracleStyle.marginLeft = obstracleMargin + "px";
    obstracleStyle.webkitTransform =
      "scaleY(" + scale + ") scaleX(" + scale + ")";
    scale += 0.01;
    obstracleTop *= 1.04;
    if (operator == "increment") {
      obstracleMargin += obstracleMarginDecr;
    }
    if (operator == "decrement") {
      obstracleMargin -= obstracleMarginDecr;
    }
    if (
      obstracleTop > range &&
      obstracleTop < range + 200 &&
      document.getElementById("car").style.marginLeft == leftMargin + "px"
    ) {
      clearInterval(interval);
      alert("Game Over!!");
      document.reload();
    }
    if (+obstracleStyle.top.replace("px", "") > 1000) {
      clearInterval(interval);
      obstracleStyle.display = "none";
      obstracleStyle.top = 130 + "px";
    }
  }, 50);
};

const car2 = carMove.bind(null, "obs2", 130, 780, 1.0, 600, 700, "increment");

const car1 = function() {
  let scale1 = 1;
  let obs1Val = 130;
  let obs1Mar = 650;
  car1int = setInterval(() => {
    document.getElementById("obs1").style.display = "inline";
    document.getElementById("obs1").style.top = obs1Val + "px";
    document.getElementById("obs1").style.marginLeft = obs1Mar + "px";
    document.getElementById("obs1").style.webkitTransform =
      "scaleY(" + scale1 + ") scaleX(" + scale1 + ")";
    scale1 += 0.01;
    obs1Mar -= 0.4;
    obs1Val *= 1.04;
    if (
      obs1Val > 600 &&
      obs1Val < 800 &&
      document.getElementById("car").style.marginLeft == 400 + "px"
    ) {
      clearInterval(car1int);
      alert("Game Over!!");
      document.reload();
    }
    if (+document.getElementById("obs1").style.top.replace("px", "") > 1000) {
      clearInterval(car1int);
      document.getElementById("obs1").style.display = "none";
      document.getElementById("obs1").style.top = 130 + "px";
    }
  }, 50);
};

const car3 = function() {
  let obs3Val = 130;
  let obs3Mar = 550;
  let scale3 = 1;
  car3int = setInterval(function() {
    document.getElementById("obs3").style.display = "inline";
    document.getElementById("obs3").style.top = obs3Val + "px";
    document.getElementById("obs3").style.marginLeft = obs3Mar + "px";
    document.getElementById("obs3").style.webkitTransform =
      "scaleY(" + scale3 + ") scaleX(" + scale3 + ")";
    scale3 += 0.01;
    obs3Mar -= 4.6;
    obs3Val *= 1.04;
    if (
      obs3Val > 630 &&
      obs3Val < 830 &&
      document.getElementById("car").style.marginLeft == 100 + "px"
    ) {
      clearInterval(car3int);
      alert("Game Over!!");
      document.reload();
    }
    if (+document.getElementById("obs3").style.top.replace("px", "") > 1000) {
      clearInterval(car3int);
      document.getElementById("obs3").style.display = "none";
      document.getElementById("obs3").style.top = 130 + "px";
    }
  }, 50);
};

const car4 = function() {
  let obs4Val = 130;
  let obs4Mar = 900;
  let scale4 = 1;
  car4int = setInterval(function() {
    document.getElementById("obs4").style.display = "inline";
    document.getElementById("obs4").style.top = obs4Val + "px";
    document.getElementById("obs4").style.marginLeft = obs4Mar + "px";
    document.getElementById("obs4").style.webkitTransform =
      "scaleY(" + scale4 + ") scaleX(" + scale4 + ")";
    scale4 += 0.02;
    obs4Mar += 4.5;
    obs4Val *= 1.04;
    if (
      obs4Val > 630 &&
      obs4Val < 830 &&
      document.getElementById("car").style.marginLeft == 1000 + "px"
    ) {
      clearInterval(car4int);
      alert("Game Over!!");
      document.reload();
    }
    if (+document.getElementById("obs4").style.top.replace("px", "") > 1000) {
      clearInterval(car4int);
      document.getElementById("obs4").style.display = "none";
      document.getElementById("obs4").style.top = 130 + "px";
    }
  }, 50);
};
let prevNum = 1;

const randomNum = function() {
  num = Math.floor(Math.random() * (5 - 1) + 1);
  if (num == prevNum) {
    randomNum();
  }
  prevNum = num;
  return num;
};

let cars = new Object();
cars["1"] = car1;
cars["2"] = car2;
cars["3"] = car3;
cars["4"] = car4;

let carNum;

const startGame = function() {
  let i = 1;
  setInterval(function() {
    cars[i]();
    i += 1;
    if (i > 4) {
      i = 1;
    }
  }, 700);
};
