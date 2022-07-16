let player = new Hero();

//처음 시작할 때, hero의 모습을 숨김
player.heroElement.style.display = "none";

// init함수는 keydown된 값을 checkKey로 전달하고, 2000ms에 한번씩 enemy(ghost)를 생성함
function init() {
  if (initCount < 1) {
    document.addEventListener("keydown", function (e) {
      checkKey(e, true);
    });

    document.addEventListener(
      "keyup",
      function (e) {
        checkKey(e, false);
      },
      false
    );
  }
  // start버튼을 누를 때마다 addEventListener가 중복되지 않도록 하기 위함
  initCount += 1;

  const ghostInterval = setInterval(function () {
    let enemy = new Ghost();
    enemy.create();
    if (isGameOver) {
      clearInterval(ghostInterval);
      gameOver();
    }
  }, 2000);

  const timerInterval = setInterval(function () {
    timer -= 1;
    timerDisplay.innerHTML = timer;
    if (timer <= 0) {
      clearInterval(timerInterval);
      isGameOver = true;
      gameOver();
    }
  }, 1000);
}

function checkKey(e, isMoving) {
  if (isMoving) {
    //keyCode와 which 모두 키 코드
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39: //right
        player.move("right");
        // preventDefault를 넣어줌으로써, 좌 우 방향키를 눌러도 페이지가 이동하지 않음
        e.preventDefault();
        break;
      case 37: //left
        player.move("left");
        e.preventDefault();
        break;
    }
  } else {
    player.stop();
  }
}

// 시작버튼
start.addEventListener("click", function () {
  if (isGameOver) {
    player.heroElement.style.display = "inline-block";
    player.heroElement.style.left = BG_WIDTH / 2 + "px";
    player.left = BG_WIDTH / 2;
    isGameOver = false;
    score = 0;
    timer = 30;
    life = 5;
    scoreDisplay.innerHTML = score;
    timerDisplay.innerHTML = timer;
    lifeDisplay.innerHTML = "LIFE : ❤❤❤❤❤";
    init();
  }
});

// 게임오버
function gameOver() {
  player.heroElement.style.display = "none";
  timer = 0;
  timerDisplay.innerHTML = timer;
}
