"use strict";

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(1900, 900);
  background(100, 100, 10);
}

//clouds will be moving
let cloud1={fill:{r:200, g:220,b:240},x:1100,y:50,width:440,height:130}
let cloud2={fill:{r:200, g:220,b:240},x:1130,y:50,width:110,height:40}
let cloud3={fill:{r:200, g:220,b:240},x:1250,y:70,width:200,height:70}
let cloud4={fill:{r:200, g:220,b:240},x:850,y:90,width:150,height:50}
let cloud5={fill:{r:200, g:220,b:240},x:720,y:80,width:290,height:120}
let cloud6={fill:{r:200, g:220,b:240},x:610,y:90,width:200,height:60}




function draw() {
  // The void
  background("#599ce8ff");
  
  //clouds
cloud1.x=cloud1.x-1
cloud2.x=cloud2.x-1
cloud3.x=cloud3.x-1
cloud4.x=cloud4.x-1
cloud5.x=cloud5.x-1
cloud6.x=cloud6.x-1
   
push();
  //gazon
  strokeWeight(2);
  stroke(255);
  fill("#3b8a64ff");ellipse(680,770,400,200);
  fill("#459970ff");ellipse(340,800,900,320);
  fill("#3ca874ff");ellipse(1600,850,1900,750); 
  fill("#3bbb7dff");ellipse(1200,930,1900,420);ellipse(200,1000,1600,500);
pop(); 
 
push();
  //noStroke();
  fill(240, 260, 100);
  stroke(0);
  ellipse(200,255,50,180);
  ellipse(330,390,180,50);
  ellipse(70,390,180,50);
//petales en angle
  angleMode(DEGREES);     rotate(-30);ellipse(-110, 640, 110, 30);      rotate(20);ellipse(130,670, 140, 35);
pop();

//plant trunk black dots
push();
  fill(0);
  stroke(255);
  ellipse(200,540,44,38);ellipse(190,565,38,34);ellipse(178,588,30);ellipse(170,612,25);ellipse(173,632,20);ellipse(182,649,23);
  ellipse(191,668,25);ellipse(205,684,27);ellipse(220,699,32);ellipse(230,720,40);ellipse(252,750,80,60);ellipse(300,780,160,80);
pop();

 //eye of flower
push();
  //boule rouge
  fill(240, 60, 100);stroke(255);strokeWeight(4);ellipse(200,483, 100, 90);
  fill("#ecfa28ff");stroke(255);ellipse(200,483, 30, 30);
  stroke(0);strokeWeight(3);fill("#ffffff");ellipse(200,390, 100);
pop();
  // Retina
push();
  noStroke();
  fill("#000000");
  ellipse(220, 410, 25);

pop();

//vase
push();
  fill("#d56038ff");stroke("#9b521bff");strokeWeight(6);rect(210,780,180,120);rect(200,780,200,50);
pop();

 
}

function aydansfunction() {
  fill(0, 212, 255);
  noStroke();
  rect(780, 30, 20, 600);
  
}




