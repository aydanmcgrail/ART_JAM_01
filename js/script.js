"use strict";
//clouds will be moving
let cloud1={x:2200,y:50,width:440,height:130,fill:{r:200, g:220,b:240}}
let cloud2={x:2230,y:50,width:110,height:40,fill:{r:200, g:220,b:240}}
let cloud3={x:2350,y:70,width:200,height:70,fill:{r:200, g:220,b:240}}
let cloud4={x:1250,y:90,width:150,height:50,fill:{r:200, g:220,b:240}}
let cloud5={x:1120,y:80,width:290,height:120,fill:{r:200, g:220,b:240}}
let cloud6={x:1010,y:90,width:200,height:60,fill:{r:200, g:220,b:240}}
let cloud7={x:4250,y:90,width:150,height:50,fill:{r:200, g:220,b:240}}
let cloud8={x:4120,y:80,width:290,height:120,fill:{r:200, g:220,b:240}}
let cloud9={x:4010,y:90,width:200,height:60,fill:{r:200, g:220,b:240}}
/**
 * Creates the canvas
 */
function setup() {
  createCanvas(1900, 900);
  background(100, 100, 10);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function draw() {
  // The void
  background("#599ce8ff");

  endcloud();
  
  //clouds
push();
fill(cloud1.fill.r,cloud1.fill.g,cloud1.fill.b,);
ellipse(cloud1.x,cloud1.y,cloud1.width,cloud1.height);
cloud1.x = cloud1.x-1;
ellipse(cloud2.x,cloud2.y,cloud2.width,cloud2.height);
cloud2.x = cloud2.x-1;
ellipse(cloud3.x,cloud3.y,cloud3.width,cloud3.height);
cloud3.x = cloud3.x-1;
ellipse(cloud4.x,cloud4.y,cloud4.width,cloud4.height);
cloud4.x = cloud4.x-1;
ellipse(cloud5.x,cloud1.y,cloud5.width,cloud5.height);
cloud5.x = cloud5.x-1;
ellipse(cloud6.x,cloud6.y,cloud6.width,cloud6.height);
cloud6.x = cloud6.x-1;
ellipse(cloud7.x,cloud7.y,cloud7.width,cloud7.height);
cloud7.x = cloud7.x-1;
ellipse(cloud8.x,cloud8.y,cloud8.width,cloud8.height);
cloud8.x = cloud8.x-1;
ellipse(cloud9.x,cloud9.y,cloud9.width,cloud9.height);
cloud9.x = cloud9.x-1;

pop();
   
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function endcloud(){
    if (cloud1.x<800){cloud1.x}

}





