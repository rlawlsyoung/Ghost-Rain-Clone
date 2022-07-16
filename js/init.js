// init함수는 keydown된 값을 checkKey로 전달하고, 2000ms에 한번씩 create함수를 실행함
function init() {
  heroElement.style.display = "inline-block";
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

  setInterval(function () {
    create();
  }, 2000);
}

function checkKey(e, isMoving) {
  if (isMoving) {
    //keyCode와 which 모두 키 코드
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39: //right
        heroElement.className = "right";
        // setLeft는 인자값만큼 영웅을 이동시키는 함수
        setLeft(10);
        // preventDefault를 넣어줌으로써, 좌 우 방향키를 눌러도 페이지가 이동하지 않음
        e.preventDefault();
        break;
      case 37: //left
        heroElement.className = "left";
        setLeft(-10);
        e.preventDefault();
        break;
    }
  } else {
    heroElement.className = "stop";
  }
}

heroElement.style.display = "none";
start.addEventListener("click", init);
