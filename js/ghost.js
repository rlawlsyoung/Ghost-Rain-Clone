function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// ghost create
function create() {
  let enemyTop = 0;
  const ghostElement = document.createElement("div");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = enemyTop + "px";
  ghostElement.style.left = randomRange(0, BG_WIDTH - GHOST_WIDTH) + "px";

  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bg.append(ghostElement);

  window.requestAnimationFrame(function () {
    move(enemyTop, ghostElement);
  });
}

function move(top, el) {
  top++;
  const ghostLeft = parseInt(el.style.left);
  const heroLeft = parseInt(heroElement.style.left);

  // top이 닿았을 때
  if (top > BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
    // left가 닿았을 때
    if (
      heroLeft < ghostLeft + GHOST_WIDTH && // 오른쪽
      heroLeft + HERO_WIDTH > ghostLeft // 왼쪽
    ) {
      die(el);
      return;
    }
    // ghost가 바닥에 닿았을 때
    if (top > BG_HEIGHT - GHOST_HEIGHT) {
      remove(el);
      return;
    }
  }
  //el의 top값은 top(인자) + px
  el.style.top = top + "px";

  // 반복
  window.requestAnimationFrame(function () {
    move(top, el);
  });
}

//유령이 바닥에 닿아서 제거될 때
function remove(ghostElement) {
  ghostElement.remove();
  life -= 1;
  if (life === 4) lifeDisplay.innerHTML = "LIFE : ❤❤❤❤ㅤ";
  else if (life === 3) lifeDisplay.innerHTML = "LIFE : ❤❤❤ㅤㅤ";
  else if (life === 2) lifeDisplay.innerHTML = "LIFE : ❤❤ㅤㅤㅤ";
  else lifeDisplay.innerHTML = "LIFE : ❤ㅤㅤㅤㅤ";
  return;
}

//유령이 hero와 맞닿아 죽었을 때
function die(ghostElement) {
  ghostElement.style.backgroundPosition = "-45px";

  const soundEffect = new Audio("./audio/dying.wav");
  soundEffect.play();

  //점수가 반복해서 오르지 않는 이유
  // move함수 가장 끝에 requestAnimationFrame이 있는데 그 전에 die함수를 실행시키고 return됨
  score += 1;
  scoreDisplay.innerHTML = score;

  setTimeout(() => {
    ghostElement.remove();
  }, 3000);
}
