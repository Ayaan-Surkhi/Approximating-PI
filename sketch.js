let slider;

function setup() {
    createCanvas(innerWidth, 550);

    let p = createP('Length/Circumference slider:');    
    p.position(305);
    slider = createSlider(100, 300, 200);
    slider.position(width/2-100);
}
  
  function draw() {
    background(0);

    textSize(18);
    text('Approximating PI using Circumference', width/2-190, 20);

    approximate();
}

const approximate = () => {
  let c = slider.value();
  let r = c/(2*PI);
  let pi = 0;

  stroke(0, 153, 255);
  line(width/2-250, 100, width/2-250, c+100);
  noStroke();
  fill(255);
  text(`Length: ${c}px`, width/2-200, height/2);

  fill(0, 153, 255);
  circle(width/2+100, height/2, r*2);
  noStroke();
  fill(255);
  text(`Circumference: Length of line = ${c}px`, width/2+155, height/2);

  pi = c/(2*r);

  noStroke();
  fill(255);
  text(`π = circumference/(2*r)`, width/2-100, height-50);
  text(`\n Our approximated value = ${pi}`, width/2-200, height-50);
  text(`\n Reference value = ${PI}`, width/2-150, height-30);
} 