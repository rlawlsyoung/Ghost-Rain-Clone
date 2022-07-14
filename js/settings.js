const BG_WIDTH = 800;
const BG_HEIGHT = 500;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;

//

let score = 0;
let life = 5;

const heroElement = document.querySelector("#hero");
const bgElement = document.querySelector("#bg");
const start = document.querySelector("#start");

const scoreDisplay = document.querySelector(".score");
const lifeDisplay = document.querySelector("#life");

// top값을 숫자로 가져오는 함수
function justTopNum(element) {
  const elementTop = getComputedStyle(element).top;
  return parseInt(elementTop);
}

// left값을 숫자로 가져오는 함수
function justLeftNum(element) {
  const elementLeft = getComputedStyle(element).left;
  return parseInt(elementLeft);
}
