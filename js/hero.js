// setLeft는 인자에 넣은 값 만큼 영웅을 이동시킴
function setLeft(left) {
  const currentLeft = parseInt(getComputedStyle(heroElement).left);
  const newleft = currentLeft + left;
  // 이는 배경 밖을 벗어나면 left값을 지정하기 전에 함수를 끝내버림
  if (newleft > BG_WIDTH - HERO_WIDTH || newleft < 0) return;

  heroElement.style.left = newleft + "px";
}
