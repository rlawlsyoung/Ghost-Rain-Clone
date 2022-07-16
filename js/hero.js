class Hero {
  constructor() {
    this.heroElement = document.querySelector("#hero");
    this.left = parseInt(getComputedStyle(this.heroElement).left);
    this.speed = 10;
  }

  move(direction) {
    if (direction === "right") {
      this.heroElement.className = "right";
      this.setLeft(this.speed);
    } else if (direction === "left") {
      this.heroElement.className = "left";
      this.setLeft(-this.speed);
    }
  }

  setLeft(speed) {
    // this.left 현재값 관리중
    const newLeft = this.left + speed;
    // 이는 배경 밖을 벗어나면 left값을 지정하기 전에 함수를 끝내버림
    if (newLeft > BG_WIDTH - HERO_WIDTH || newLeft < 0) return;

    this.heroElement.style.left = newLeft + "px";
    this.left = newLeft;
  }

  stop() {
    this.heroElement.className = "stop";
  }
}
