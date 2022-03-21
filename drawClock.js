function drawClock() {
    ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    //drawShortBreaks(ctx, radius, length, width);
    drawTime(ctx, radius);
  }