//이미지 파일 크기값

const BG_WIDTH = 800;
const BG_HEIGHT = 500;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;

// DOM 지정

const bg = document.getElementById("bg");

const scoreDisplay = document.querySelector(".score");
const timerDisplay = document.querySelector(".timer");
const lifeDisplay = document.querySelector("#life");
const start = document.querySelector("#start");

// 기타

let score = 0;
let life = 5;
let isGameOver = true;
let timer = 30;
let initCount = 0;

// 범위 내의 랜덤 값

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
