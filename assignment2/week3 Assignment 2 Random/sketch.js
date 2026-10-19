let caseRed = 180;
let caseGreen = 210;
let caseBlue = 255;

let decoRed = 255;
let decoGreen = 255;
let decoBlue = 255;
let decoX = 200;
let decoY = 330;
let decoSize = 45;

let caseStyle = 1;

function setup() {
  createCanvas(400, 630);
}

function draw() {
  // 배경
  background(245, 243, 238);
  // 휴대폰 그림자
  noStroke();
  fill(180);
  rect(110, 75, 200, 470, 25);
  // 갤럭시 케이스 뒷면
  fill(caseRed, caseGreen, caseBlue);
  stroke(30);
  strokeWeight(4);
  rect(100, 65, 200, 470, 25);
  // 갤럭시 카메라
  fill(35);
  stroke(15);
  strokeWeight(3);
  rect(118, 85, 65, 130, 15);
  // 카메라 렌즈 세 개
  fill(10);
  circle(140, 110, 30);
  circle(140, 150, 30);
  circle(140, 190, 30);
  // 플래시
  fill(255, 245, 180);
  circle(165, 110, 12);
  // 케이스 디자인 1. 대각선 줄무늬
  if (caseStyle == 1) {
    stroke(decoRed, decoGreen, decoBlue);
    strokeWeight(10);
    line(120, 260, 275, 190);
    line(120, 330, 275, 260);
    line(120, 400, 275, 330);
    line(120, 470, 275, 400);
  }
  // 케이스 디자인 2. 물방울무늬
  if (caseStyle == 2) {
    noStroke();
    fill(decoRed, decoGreen, decoBlue);
    circle(decoX, decoY, decoSize);
    circle(decoX - 50, decoY + 55, decoSize);
    circle(decoX + 55, decoY + 100, decoSize);
    circle(decoX - 10, decoY + 155, decoSize);
  }
}

function mousePressed() {
  // 케이스 종류 선택
  caseStyle = int(random(1, 3));
  // 케이스 바탕색
  caseRed = random(80, 256);
  caseGreen = random(80, 256);
  caseBlue = random(80, 256);
  // 장식 무늬색
  decoRed = random(256);
  decoGreen = random(256);
  decoBlue = random(256);
  // 장식 위치와 크기
  decoX = random(180, 215);
  decoY = random(260, 280);
  decoSize = random(7, 45);
}