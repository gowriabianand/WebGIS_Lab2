function drawNumbers(ctx, radius) {
    var ang;
    var num;
  
    ctx.font = radius * 0.15 + "px arial"; //Set the font size (of the drawing object) to 15% of the radius:
  
    ctx.textBaseline = "middle"; //Set the text alignment to the middle and the center of the print position:
    ctx.textAlign = "center";
    
    //Calculate the print position (for 12 numbers) to 85% of the radius, rotated (PI/6) for each number
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6; //pi/6 radians is 30 degrees multiplied by 12
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }
  