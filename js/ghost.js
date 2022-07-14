function createGhost() {
  const ghostElement = document.createElement("div");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0";

  // 0 ~ 배경-유령 너비 사이의 값에서 랜덤으로 값을 하나 추출함
  let randomLeft = randomRage(0, BG_WIDTH - GHOST_WIDTH);
  // 유령의 left값을 랜덤값으로 지정함
  ghostElement.style.left = randomLeft + "px";

  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = "url(./images/ghost.png) no-repeat";

  bgElement.append(ghostElement);

  // 1000ms당 ghost의 top이 10px씩 추가됨
  setInterval(function () {
    let ghostTopNum = justTopNum(ghostElement) + 10;
    // ghost가 바닥에 닿으면 제거 및 life가 1 깎임
    if (ghostTopNum > BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      life -= 1;
      if (life === 4) lifeDisplay.innerHTML = "LIFE : ❤❤❤❤ㅤ";
      else if (life === 3) lifeDisplay.innerHTML = "LIFE : ❤❤❤ㅤㅤ";
      else if (life === 2) lifeDisplay.innerHTML = "LIFE : ❤❤ㅤㅤㅤ";
      else lifeDisplay.innerHTML = "LIFE : ❤ㅤㅤㅤㅤ";
      return;
    }
    //ghost가 영웅과 닿으면 사망함
    if (ghostTopNum > BG_HEIGHT - (GHOST_HEIGHT + HERO_HEIGHT)) {
      if (
        justLeftNum(ghostElement) - HERO_WIDTH < justLeftNum(heroElement) &&
        justLeftNum(heroElement) < justLeftNum(ghostElement) + GHOST_WIDTH
      ) {
        // ghost 이미지 스프라이트 값 변경
        ghostElement.style.backgroundPosition = "-45px -0px";
        // 0.98초후 ghost 제거
        //(1초가 아니라 0.98인 이유는, ghost가 스프라이트 값이 바뀌고 100ms 간격으로 980ms동안 점수를 얻는데, 1000ms로 설정하면 11점이 얻어지기 때문
        setTimeout(function () {
          ghostElement.remove();
        }, 980);
      }
      // ghost가 죽으면 더 이상 내려오지 않도록 설정함
      if (ghostElement.style.backgroundPosition == "-45px 0px") {
        score += 1;
        scoreDisplay.innerHTML = `${score}`;
        return;
      }
    }
    ghostElement.style.top = ghostTopNum + "px";
  }, 100);
}

setInterval(createGhost, 3000);

function randomRage(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
