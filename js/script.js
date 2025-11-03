"use strict";
//clouds will be moving
let cloud1 = {
  x: 2200,
  y: 50,
  width: 440,
  height: 130,
  fill: { r: 200, g: 220, b: 240 },
};
let cloud2 = {
  x: 2230,
  y: 50,
  width: 110,
  height: 40,
  fill: { r: 200, g: 220, b: 240 },
};
let cloud3 = {
  x: 2350,
  y: 70,
  width: 200,
  height: 70,
  fill: { r: 200, g: 220, b: 240 },
};
let cloud4 = {
  x: 1250,
  y: 160,
  width: 150,
  height: 50,
  fill: { r: 200, g: 220, b: 240 },
};
let cloud5 = {
  x: 1120,
  y: 140,
  width: 290,
  height: 120,
  fill: { r: 200, g: 220, b: 240 },
};
let cloud6 = {
  x: 1010,
  y: 175,
  width: 200,
  height: 60,
  fill: { r: 200, g: 220, b: 240 },
};
let cloud7 = {
  x: 3250,
  y: 210,
  width: 150,
  height: 50,
  fill: { r: 200, g: 220, b: 240 },
};
let cloud8 = {
  x: 3120,
  y: 200,
  width: 290,
  height: 120,
  fill: { r: 200, g: 220, b: 240 },
};
let cloud9 = {
  x: 3010,
  y: 210,
  width: 200,
  height: 60,
  fill: { r: 200, g: 220, b: 240 },
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let target1 = {
  fill: "#000000",
  fills: {
    touch: "#33cc33",
    normal: "#cc3333",
  },
  x: 1280,
  y: 560,
  //width:550,
  //height:550,
  size: 550,
};

let t2x = 1110;
let t2y = 590;
let t2w = 160;
let t2h = 100;

let target2 = {
  fill: "red",
  fills: {
    touch: "blue",
    normal: "red",
  },
  x: 1110,
  y: 590,
  width: 160,
  height: 100,
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let kidSkin = {
  fill: "#eeb47dff",
  fills: {
    normal: "#eeb47dff",
    scared: "#dd918fff",
    stung: "#a16c8aff",
  },
};

let sourcils = {
  fill: "black",
  fills: {
    invisible: { r: 0, g: 0, b: 0 },
    visible: { r: 0, g: 0, b: 0 },
  },
  width: 1,
  height: 1,
  maxWidth: 100,
  minWidth: 0.05,
  maxHeight: 50,
  minHeight: 0.05,
};

let kidLips = {
  fill: "#da8194ff",
  fills: {
    normal: "#da8194ff",
    stung: "#854367ff",
  },
  x1: 930,
  y1: 880,
  x2: 1110,
  y2: 570,
  rotate1: -15,
  rotate2: 10,
  width: 170,
  height: 60,
  maxWidth: 250,
  minWidth: 150,
  maxHeight: 130,
  minHeight: 50,
};

let eyesBlack = {
  x1: 1160,
  y1: 430,
  x2: 1215,
  maxY1: 435,
  minY1: 418,
  width: 40,
  height: 60,
  maxWidth: 46,
  minWidth: 20,
  maxHeight: 65,
  minHeight: 10,
};
let eyesWhite = {
  x1: 1175,
  y1: 420,
  x2: 1230,
  width: 70,
  height: 110,
  maxWidth: 76,
  minWidth: 73,
  maxHeight: 112,
  minHeight: 10,
};

let ballon = {
  fill: { r: 210, g: 190, b: 100 },
  x: 813,
  y: 450,
  width: 170,
  height: 200,
  maxX: 830,
  minX: 800,
};

///for the ballon
let speedUp = 4;
let speed = 0.2;
let direction = 1;

let img1 = {
  width: 330,
  height: 270,
};

let soundBzz;
let soundCry;
let soundScared;
let soundNeedle;

let hasPlayed = false;

function preload() {
  img1 = loadImage("./assets/images/bee.png");
  soundBzz = loadSound("./assets/sounds/bzzz.mp3");
  soundCry = loadSound("./assets/sounds/cry.mp3");
  soundScared = loadSound("./assets/sounds/scared.mp3");
  soundNeedle = loadSound("./assets/sounds/needle.mp3");
}

function setup() {
  createCanvas(1900, 1000);
  background(100, 100, 10);

  soundBzz.loop();
  soundCry.setVolume(0.8);

  //////do not know if it goes in setup or draw i put it in both to be sure
  getAudioContext().resume();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  background("#599ce8ff");

  drawTarget1();

  noStroke();
  fill("#599ce8ff");
  rect(0, 0, 1900, 900);

  getAudioContext().resume();

  cloudsMoving();
  checkInput();

  let volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  soundBzz.setVolume(volume);

  //clouds__________________________________________________________________________________________________
  push();
  fill(cloud1.fill.r, cloud1.fill.g, cloud1.fill.b);
  ellipse(cloud1.x, cloud1.y, cloud1.width, cloud1.height);
  cloud1.x = cloud1.x - 1.1;
  ellipse(cloud2.x, cloud2.y, cloud2.width, cloud2.height);
  cloud2.x = cloud2.x - 0.9;
  ellipse(cloud3.x, cloud3.y, cloud3.width, cloud3.height);
  cloud3.x = cloud3.x - 0.9;
  ellipse(cloud4.x, cloud4.y, cloud4.width, cloud4.height);
  cloud4.x = cloud4.x - 1.4;
  ellipse(cloud5.x, cloud5.y, cloud5.width, cloud5.height);
  cloud5.x = cloud5.x - 1.3;
  ellipse(cloud6.x, cloud6.y, cloud6.width, cloud6.height);
  cloud6.x = cloud6.x - 1.6;
  ellipse(cloud7.x, cloud7.y, cloud7.width, cloud7.height);
  cloud7.x = cloud7.x - 2.5;
  ellipse(cloud8.x, cloud8.y, cloud8.width, cloud8.height);
  cloud8.x = cloud8.x - 2.8;
  ellipse(cloud9.x, cloud9.y, cloud9.width, cloud9.height);
  cloud9.x = cloud9.x - 3;

  pop();

  push();
  //gazon
  strokeWeight(2);
  stroke(255);
  fill("#3b8a64ff");
  ellipse(680, 770, 400, 200);
  fill("#459970ff");
  ellipse(340, 800, 900, 320);
  fill("#3ca874ff");
  ellipse(1600, 850, 1900, 750);
  fill("#3bbb7dff");
  ellipse(1200, 930, 1900, 420);
  ellipse(200, 1000, 1600, 500);
  pop();

  push();
  //noStroke();
  strokeWeight(2);
  fill(240, 260, 100);
  stroke(0);
  ellipse(200, 255, 50, 180);
  ellipse(330, 390, 180, 50);
  ellipse(70, 390, 180, 50);
  //petales en angle
  angleMode(DEGREES);
  rotate(-30);
  ellipse(-110, 640, 110, 30);
  rotate(20);
  ellipse(130, 670, 140, 35);
  pop();

  //plant trunk black dots
  push();
  fill(0);
  strokeWeight(3);
  stroke(255);
  ellipse(200, 540, 44, 38);
  ellipse(190, 565, 38, 34);
  ellipse(178, 588, 30);
  ellipse(170, 612, 25);
  ellipse(173, 632, 20);
  ellipse(182, 649, 23);
  ellipse(191, 668, 25);
  ellipse(205, 684, 27);
  ellipse(220, 699, 32);
  ellipse(230, 720, 40);
  ellipse(252, 750, 80, 60);
  ellipse(300, 780, 160, 80);
  pop();

  //eye of flower
  push();
  //boule rouge
  fill(240, 60, 100);
  stroke(255);
  strokeWeight(4);
  ellipse(200, 483, 100, 90);
  fill("#ecfa28ff");
  stroke(255);
  ellipse(200, 483, 30, 30);
  stroke(0);
  strokeWeight(3);
  fill("#ffffff");
  ellipse(200, 390, 100);
  pop();
  // Retina
  push();
  noStroke();
  fill("#000000");
  ellipse(220, 410, 25);

  pop();

  //vase
  push();
  fill("#d56038ff");
  stroke("#9b521bff");
  strokeWeight(6);
  rect(210, 780, 180, 120);
  rect(200, 780, 200, 50);
  pop();

  //kid
  push();
  strokeWeight(2);
  stroke(0);
  fill(kidSkin.fill);
  ellipse(1300, 500, 400, 300);
  stroke(0);
  rect(1100, 500, 400);
  ellipse(820, 770, 150);
  noStroke();
  push();
  stroke(0);
  strokeWeight(2);
  ellipse(1100, 485, 210, 60);
  ellipse(1500, 500, 100, 150);
  ellipse(1490, 500, 80, 110);
  ellipse(1470, 500, 60, 75);
  pop();
  ellipse(1250, 475, 200);
  ellipse(1385, 500, 200);

  //clothes + neck skin at end
  push();
  fill(40, 30, 200);
  rect(1100, 700, 400, 200);
  ellipse(1500, 870, 100, 200), pop();

  push();
  //eyes
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(eyesWhite.x1, eyesWhite.y1, eyesWhite.width, eyesWhite.height);
  ellipse(eyesWhite.x2, eyesWhite.y1, eyesWhite.width, eyesWhite.height);
  fill(0);
  ellipse(eyesBlack.x1, eyesBlack.y1, eyesBlack.width, eyesBlack.height);
  ellipse(eyesBlack.x2, eyesBlack.y1, eyesBlack.width, eyesBlack.height);
  pop();

  //eyesBlack.x1,eyesBlack.y1,eyesBlack.width,eyesBlack.height);
  //ellipse(eyesBlack.x2,eyesBlack.y1,eyesBlack.width,eyesBlack.height);

  //sourcils
  push();
  noStroke();
  fill(sourcils.fill);
  angleMode(DEGREES);
  rotate(-30);
  rect(770, 890, sourcils.width, sourcils.height);
  rotate(45);
  rect(1250, 20, sourcils.width, sourcils.height);
  pop();

  //hat cap
  push();
  stroke(0);
  strokeWeight(2);
  fill("#ece934ff");
  ellipse(1430, 270, 50);
  push();
  fill(230, 100, 100);
  angleMode(DEGREES);
  rotate(15);
  ellipse(1430, -35, 200, 130);
  rect(1150, -20, 380, 50);
  pop();

  push();
  stroke(0);
  fill(2200, 190, 220);
  rect(1270, 700, 250, 75);
  rect(1070, 700, 75, 75);
  noStroke();
  fill(kidSkin.fill);
  angleMode(DEGREES);
  rotate(-45);
  rect(315, 1259, 134);
  fill(40, 30, 200);
  rotate(-30);
  rect(-590, 1050, 110, 270);
  pop();
  push();

  //ballon et tige
  push();
  fill(0);
  rect(810, 550, 10, 300);
  fill(ballon.fill.r, ballon.fill.g, ballon.fill.b);
  ellipse(ballon.x, ballon.y, ballon.width, ballon.height);
  pop();
  ballon.x += speed * direction;
  if (ballon.x > ballon.maxX || ballon.x < ballon.minX) {
    direction *= -1;
  }

  //doigts kid
  push();
  fill(kidSkin.fill);
  ellipse(850, 750, 75, 80);
  ellipse(790, 760, 100, 130);
  pop();

  ////kid lips
  push();
  fill(kidLips.fill);
  angleMode(DEGREES);
  rotate(kidLips.rotate1);
  ellipse(920, 880, kidLips.width, kidLips.height);
  pop();

  push();

  fill(255);
  rect(1117, 565, 33, 50);
  rect(1080, 560, 30, 50);
  pop();

  push();
  fill(kidLips.fill);
  angleMode(DEGREES);
  rotate(kidLips.rotate2);
  ellipse(1190, 360, kidLips.width, kidLips.height);
  pop();

  push();
  image(img1, mouseX - 295, mouseY - 150, img1.width, img1.height);
  strokeWeight(6);
  fill("#ddd9a3ff");
  rect(-5, 890, 1910, 200);
  pop();

  textSize(41);
  fill(0);
  strokeWeight(2);
  text(
    "Do not let the bee close to the kid. BY THE LOVE OF GOD DO NOT LET THE BEE STING THE KID!",
    38,
    960
  );

  if (soundCry.isPlaying()) {
    fill("#888452ff");
    strokeWeight(6);
    rect(-5, 890, 1910, 200);
    textSize(72);
    fill("#f3663bff");
    noStroke();
    text("There you go, told you so! This kid just died...", 150, 970);
    //ballon up
    ballon.y -= speedUp;
    //lips
    kidLips.fill = kidLips.fills.stung;
    kidLips.width += 1;
    kidLips.width = constrain(
      kidLips.width,
      kidLips.minWidth,
      kidLips.maxWidth
    );
    kidLips.height += 1;
    kidLips.height = constrain(
      kidLips.height,
      kidLips.minHeight,
      kidLips.maxHeight
    );
    //eyes
    eyesBlack.width -= 30;
    eyesBlack.width = constrain(
      eyesBlack.width,
      eyesBlack.minWidth,
      eyesBlack.maxWidth
    );

    eyesBlack.height -= 30;
    eyesBlack.height = constrain(
      eyesBlack.height,
      eyesBlack.minHeight,
      eyesBlack.maxHeight
    );

    eyesBlack.y1 -= 1;
    eyesBlack.y1 = constrain(eyesBlack.y1, eyesBlack.minY1, eyesBlack.maxY1);

    eyesWhite.width -= 0.2;
    eyesWhite.width = constrain(
      eyesWhite.width,
      eyesWhite.minWidth,
      eyesWhite.maxWidth
    );

    eyesWhite.height -= 0.2;
    eyesWhite.height = constrain(
      eyesWhite.height,
      eyesWhite.minHeight,
      eyesWhite.minHeight
    );
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function cloudsMoving() {
  const endOfCloud1 = cloud1.x < -440;
  if (endOfCloud1) {
    cloud1.x = 2120;
  }

  const endOfCloud2 = cloud2.x < -110;
  if (endOfCloud2) {
    cloud2.x = 1955;
  }

  const endOfCloud3 = cloud3.x < -200;
  if (endOfCloud3) {
    cloud3.x = 2000;
  }

  const endOfCloud4 = cloud4.x < -150;
  if (endOfCloud4) {
    cloud4.x = 1975;
  }

  const endOfCloud5 = cloud5.x < -290;
  if (endOfCloud5) {
    cloud5.x = 2045;
  }

  const endOfCloud6 = cloud6.x < -200;
  if (endOfCloud6) {
    cloud6.x = 2000;
  }

  const endOfCloud7 = cloud7.x < -150;
  if (endOfCloud7) {
    cloud7.x = 1975;
  }

  const endOfCloud8 = cloud8.x < -290;
  if (endOfCloud8) {
    cloud8.x = 2045;
  }

  const endOfCloud9 = cloud9.x < -200;
  if (endOfCloud9) {
    cloud9.x = 2000;
  }
}

function checkInput() {
  const distanceTarget1Mouse = dist(mouseX, mouseY, target1.x, target1.y);
  const mouseOverlapsKid = distanceTarget1Mouse < target1.size / 2;

  if (mouseIsPressed === false && kidSkin.fill !== kidSkin.fills.stung) {
    if (mouseOverlapsKid) {
      kidSkin.fill = kidSkin.fills.scared;
    } else {
      kidSkin.fill = kidSkin.fills.normal;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///sound
  /////////////////////////////////////////////////////////////////////////////////////////////////

  if (mouseOverlapsKid) {
    if (!hasPlayed) {
      soundScared.play(); // Play the sound
      hasPlayed = true; // Set the flag to true
    }
  } else {
    // Reset the flag when the mouse is no longer hovering over the element
    hasPlayed = false;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  ////sourcils
  /////////////////////////////////////////////////////////////////////////////////////////////////

  if (mouseIsPressed === false && kidSkin.fill !== kidSkin.fills.stung) {
    if (mouseOverlapsKid) {
      (sourcils.height += 50),
        (sourcils.height = constrain(
          sourcils.height,
          sourcils.minHeight,
          sourcils.maxHeight
        ));
      sourcils.width += 50;
      sourcils.width = constrain(
        sourcils.width,
        sourcils.minWidth,
        sourcils.maxWidth
      );
    } else {
      sourcils.height -= 50;
      sourcils.height = constrain(
        sourcils.height,
        sourcils.minHeight,
        sourcils.maxHeight
      );
      sourcils.width -= 50;
      sourcils.width = constrain(
        sourcils.width,
        sourcils.minWidth,
        sourcils.maxWidth
      );
    }
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, target2.x, target2.y);
  if (d < target2.width / 2) {
    soundCry.play();
    soundNeedle.play();
    soundScared.setVolume(0);
    kidSkin.fill = kidSkin.fills.stung;
    (sourcils.height += 50),
      (sourcils.height = constrain(
        sourcils.height,
        sourcils.minHeight,
        sourcils.maxHeight
      ));
    sourcils.width += 50;
    sourcils.width = constrain(
      sourcils.width,
      sourcils.minWidth,
      sourcils.maxWidth
    );
  }
}

function drawTarget1() {
  push();
  noStroke();
  fill(target1.fill);
  // Display the target1 at its position and size         FOR THE BODY!!!!!!!
  ellipse(target1.x, target1.y, target1.size);
  pop();
}

function drawTarget2() {
  push();
  noStroke();
  fill(target2.fill);
  // Display the target2 at its position and size         FOR THE LIPS!!!!
  ellipse(target2.x, target2.y, target2.width, target2.height);
  pop();
}
