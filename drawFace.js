function drawFace(ctx, radius) {
    var grad;
  
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
  
    grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05); //Create a radial gradient (95% and 105% of original clock radius)
  
    grad.addColorStop(0.05, '#333');
    grad.addColorStop(0.5, 'purple'); //Create 3 color stops, corresponding with the inner, middle, and outer edge of the arc:
    grad.addColorStop(0.95, '#333');
  
    ctx.strokeStyle = grad; //Define the gradient as the stroke style of the drawing object:
  
    ctx.lineWidth = radius*0.1; //Define the line width of the drawing object (10% of radius):
  
    ctx.stroke(); //Draw the circle:
  
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI); //Draw the clock center
    ctx.fillStyle = '#333';
    ctx.fill();
  }