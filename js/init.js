document.addEventListener("keydown", function (e) {
  //getComputedStyle은 heroElement의 인라인 태그 (div id=hero) 를 살펴보면, left값이 없기 때문에 DOM에서 CSS값을 가져오려고 사용하는 것이다.
  const heroLeft = getComputedStyle(heroElement).left;

  //split은 문자 변수에서 쓸 수 있는데, 여기선 "px"를 기준으로 나누고 배열을 만듦.
  //Number()은 문자열을 숫자로 변환해줌
  const heroLeftWithoutPx = Number(heroLeft.split("px")[0]);

  if (e.keyCode === 37 && heroLeftWithoutPx > 0) {
    // 왼쪽 키 코드 = 37
    heroElement.className = "left";

    heroElement.style.left = heroLeftWithoutPx - 5 + "px";
  } else if (e.keyCode === 39 && heroLeftWithoutPx < BG_WIDTH - HERO_WIDTH) {
    // 오른쪽 키 코드 = 39
    heroElement.className = "right";

    heroElement.style.left = heroLeftWithoutPx + 5 + "px";
  }
});

document.addEventListener("keyup", function (e) {
  heroElement.className = "stop";
});
