function drawShortBreaks(ctx, radius, length, width) {
  var ang, pos;
  var length = radius*0.9, width = 0.01*radius;
  var curStrkStyle = ctx.strokeStyle;
  ctx.strokeStyle = "#CCCCCC";
  for(num = 0; num < 60; num++){
    ang = num * Math.PI / 30;
    ctx.beginPath();
    ctx.lineWidth = width;
	if(num % 5 == 0) ctx.lineWidth = 1.8*width;

    ctx.lineCap = "square";
    ctx.rotate(ang);
	ctx.moveTo(0,-0.985*length);
	if(num % 5 == 0) ctx.lineTo(0, -1.03*length);
	else ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-ang);
  }
  ctx.strokeStyle = curStrkStyle;
}