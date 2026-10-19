let gotHit = false;

function setup() {
  createCanvas(400, 500);
}

function draw() {
  background(145, 195, 255);
  noStroke();

  fill(255, 125, 175);
  circle(0, 0, 230);

  fill(255, 220, 100);
  circle(400, 0, 220);

  fill(115, 225, 195);
  circle(0, 500, 250);

  fill(180, 145, 240);
  circle(400, 500, 250);

  noStroke();
  fill(40);
  textSize(25);
  text("딱밤을 피할 수 있을까?", 90, 65);


  let overFace =
    mouseX > 100 && mouseX < 300 &&
    mouseY > 110 && mouseY < 340;


  if (gotHit == true) {
    stroke(60);
    strokeWeight(3);
    fill(255, 125, 145);
    rect(100, 110, 200, 230);

    stroke(45);
    strokeWeight(4);
    line(145, 205, 175, 215);
    line(145, 215, 175, 205);
    line(225, 215, 255, 205);
    line(225, 205, 255, 215);

    noFill();
    arc(200, 275, 65, 40, PI, TWO_PI);

    noStroke();
    fill(245, 85, 85);
    ellipse(225, 160, 35, 22);

    stroke(225, 155, 120);
    strokeWeight(15);
    line(335, 100, 230, 155);

    stroke(240, 75, 65);
    strokeWeight(3);
    line(205, 145, 190, 130);
    line(242, 140, 255, 122);
    line(242, 175, 260, 187);

    noStroke();
    fill(210, 50, 50);
    textSize(24);
    text("악!", 273, 94);

    fill(80);
    textSize(17);
    text("ouch! 아무 키나 누르면 다시 시작", 90, 410);

    push();
    
    textSize(35);
    textAlign(CENTER, CENTER);
    text("👊🤪", mouseX, mouseY);

    pop();


  } else if (overFace) {
    push();
    translate(random(-3, 3), random(-3, 3));

    stroke(60);
    strokeWeight(3);
    fill(255, 240, 210);
    rect(100, 110, 200, 230);

    noStroke();
    fill(45);
    circle(160, 205, 15);
    circle(240, 205, 15);
    ellipse(200, 270, 27, 38);

    pop();

    noStroke();
    fill(80);
    textSize(17);
    text("설마... 누를 거야?", 135, 410);

    push();
    
    textSize(35);
    textAlign(CENTER, CENTER);
    text("👊", mouseX, mouseY);

    pop();


  } else {
    stroke(60);
    strokeWeight(3);
    fill(255, 220, 130);
    rect(100, 110, 200, 230);

    noStroke();
    fill(45);
    circle(160, 205, 13);
    circle(240, 205, 13);

    noFill();
    stroke(45);
    strokeWeight(4);
    arc(200, 250, 70, 45, 0, PI);

    noStroke();
    fill(80);
    textSize(17);
    text("얼굴에 마우스를 올려보세요", 105, 410);

    push();
    
    textSize(35);
    textAlign(CENTER, CENTER);
    text("👊", mouseX, mouseY);

    pop();
  }
}


function mousePressed() {
  if (
    mouseX > 100 && mouseX < 300 &&
    mouseY > 110 && mouseY < 340
  ) {
    gotHit = true;
  }
}


function keyPressed() {
  gotHit = false;
}