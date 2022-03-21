/*
function drawMinuteMarkers(){
    
let g=my.can.g
g.font=' '+((this.radius*this.style.numSz)>>0)+'px Arial'
g.textAlign='center'
g.fillStyle='#444'
let dotSize=2
let i=1
while(i<=60){let angle=Math.PI*2*(-i/60)
let dotRad=this.radius*this.style.dotDist
let dotX=Math.sin(angle)*dotRad+this.center.x
let dotY=Math.cos(angle)*dotRad+this.center.y
if(i%this.style.boldN){dotSize=1}else{dotSize=3}
if(i%this.style.numN){}else{g.fillStyle='#004'
g.strokeStyle='#fff'
g.lineWidth=1
let numRad=this.radius*(1-this.style.numDist)
let numX=Math.sin(angle)*numRad+this.center.x
let numY=Math.cos(angle)*numRad+this.center.y+this.radius*0.09
let h=Math.floor(i/5)+6
if(h>12)h-=12
g.font=' '+((this.radius*this.style.numSz)>>0)+'px Arial'
g.fillText(h.toString(),numX,numY)
numX=Math.sin(angle)*numRad*0.7+this.center.x
numY=Math.cos(angle)*numRad*0.7+this.center.y+this.radius*0.05
if(0){h+=12
if(h==24)h='00'
g.font=' '+((0.5*this.radius*this.style.numSz)>>0)+'px Arial'
g.fillStyle='black'
g.fillText(h.toString(),numX,numY)}}
g.fillStyle='#444'
g.beginPath()
g.arc(dotX,dotY,dotSize,0,Math.PI*2)
g.fill()
i++}}
*/