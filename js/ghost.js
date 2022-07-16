class Ghost {
  constructor() {
    this.ghostElement = document.createElement("div");
    this.enemyTop = 0;
    this.ghostElement.style.position = "absolute";
    this.ghostElement.style.top = this.enemyTop + "px";
    this.ghostElement.style.left =
      randomRange(0, BG_WIDTH - GHOST_WIDTH) + "px";

    this.ghostElement.style.width = GHOST_WIDTH + "px";
    this.ghostElement.style.height = GHOST_HEIGHT + "px";
    this.ghostElement.style.background = 'url("./images/ghost.png") no-repeat';
  }

  create() {
    bg.append(this.ghostElement);
    window.requestAnimationFrame(() => {
      this.move(this.enemyTop, this.ghostElement);
    });
  }

  move(top, el) {
    top++;
    const ghostLeft = parseInt(el.style.left);
    const heroLeft = parseInt(player.heroElement.style.left);

    // top이 닿았을 때
    if (top > BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
      // left가 닿았을 때
      if (
        heroLeft < ghostLeft + GHOST_WIDTH && // 오른쪽
        heroLeft + HERO_WIDTH > ghostLeft // 왼쪽
      ) {
        if (!isGameOver) {
          this.die(el);
          return;
        }
      }
      // ghost가 바닥에 닿았을 때
      if (top > BG_HEIGHT - GHOST_HEIGHT) {
        this.remove(el);
        return;
      }
    }
    //el의 top값은 top(인자) + px
    el.style.top = top + "px";

    // 게임 끝나면 제거
    if (isGameOver) {
      this.ghostElement.remove();
      return;
    }

    // 반복
    window.requestAnimationFrame(() => {
      this.move(top, el);
    });
  }

  //ghost가 바닥에 닿았을때 제거하는 함수
  remove(ghostElement) {
    ghostElement.remove();
    if (!isGameOver) {
      life -= 1;
      if (life === 4) lifeDisplay.innerHTML = "LIFE : ❤❤❤❤ㅤ";
      else if (life === 3) lifeDisplay.innerHTML = "LIFE : ❤❤❤ㅤㅤ";
      else if (life === 2) lifeDisplay.innerHTML = "LIFE : ❤❤ㅤㅤㅤ";
      else if (life === 1) lifeDisplay.innerHTML = "LIFE : ❤ㅤㅤㅤㅤ";
      else if (life === 0) {
        lifeDisplay.innerHTML = "LIFE : ㅤㅤㅤㅤㅤ";
        isGameOver = true;
      }
    }
    return;
  }

  //유령이 hero와 맞닿았을 때 제거하는 함수
  die(ghostElement) {
    ghostElement.style.backgroundPosition = "-45px";

    const soundEffect = new Audio("./audio/dying.wav");
    soundEffect.play();

    // 오류해결) 전처럼 점수가 반복해서 오르지 않는 이유
    // move함수 가장 끝에 requestAnimationFrame이 있는데 그 전에 die함수를 실행시키고 return됨
    score += 1;
    scoreDisplay.innerHTML = score;

    setTimeout(() => {
      ghostElement.remove();
    }, 1500);
  }
}
