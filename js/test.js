let target2={
  fill: "red",
  fills:{
    touch:"blue",
    normal:"red"
  },
  x:1110,
  y:590,
  size:1200
}

function setup() {
  createCanvas(1900, 1000);
  background(100, 100, 10); 


drawTarget2();
checkInput();

}
function checkInput(){

const distanceTarget2Mouse =dist(mouseX,mouseY,target2.x,target2.y);
    const mouseOverlapsLips=(distanceTarget2Mouse<target2.size/2);


    if (mouseOverlapsLips){
      target2.fill=target2.fills.touch;
    } else {
      target2.fill=target1.fills.normal;
    }
}


function drawTarget2() {
    push();
    noStroke();
    fill(target2.fill);
    // Display the target2 at its position and size         FOR THE LIPS!!!!
    ellipse(target2.x, target2.y,target2.size);
    pop();   

}
