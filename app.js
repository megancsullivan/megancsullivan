
TweenMax.set('#yes', {
  position:'absolute',
  left:'50%',
  xPercent:-50,
  top:'50%',
  yPercent:-50
});
TweenMax.set('#no', {
  position:'absolute',
  left:'50%',
  xPercent:-50,
  top:'50%',
  yPercent:-50
});

//TICK

var tickContainer = document.getElementById('tick-container');
var tickOutlineBg = document.getElementById('tick-outline-bg');
var tickOutline = document.getElementById('tick-outline');
var tick = document.getElementById('tick');


TweenMax.set(tickContainer, {
  position:'absolute',
  left:'30%',
  xPercent:-50,
  top:'50%',
  yPercent:-50,
  cursor:'pointer',
  userSelect:'none'
});


TweenMax.set(tickOutline, {
  drawSVG:'0% 100%',
  transformOrigin:'50% 50%',
  rotation:205
});
TweenMax.set(tick, {
  drawSVG:'100% 100%'
})

var tickTl = new TimelineMax({paused:true, repeat:1, yoyo:true, repeatDelay:2});
tickTl.timeScale(2);
tickTl.to('#yes', 1, {
  alpha:0,
  rotation:-90,
  scale:0.8,
  ease:Power2.easeIn
})
 .to(tickOutline, 1, {  
  drawSVG:'0%',
  ease:Power2.easeIn
}, '-=1')
.to(tick, 1, {
  drawSVG:'75% 3%',
  ease:Back.easeOut
});

tickContainer.addEventListener('click', function(){
  if(tickTl.time() === 0){
    tickTl.play(0);
  } 

})

//CROSS


var crossContainer = document.getElementById('cross-container');
var crossOutlineBg = document.getElementById('cross-outline-bg');
var crossOutline = document.getElementById('cross-outline');
var crossLongLine = document.getElementById('cross-long-line');
var crossShortLine = document.getElementById('cross-short-line');

TweenMax.set(crossContainer, {
  position:'absolute',
  left:'70%',
  xPercent:-50,
  top:'50%',
  yPercent:-50,
  cursor:'pointer',
  userSelect:'none'
});

TweenMax.set(crossOutline, {
  drawSVG:'0% 100%',
  transformOrigin:'50% 50%',
  rotation:228
});
TweenMax.set(crossLongLine, {
  drawSVG:'100% 100%'
})
TweenMax.set(crossShortLine, {
  drawSVG:'100% 100%'
})

var crossTl = new TimelineMax({paused:true, repeat:1, yoyo:true, repeatDelay:2});
crossTl.timeScale(2);
crossTl.to('#no', 1, {
  alpha:0,
  rotation:-90,
  scale:0.8,
  ease:Power2.easeIn
})
 .to(crossOutline, 1, {  
  drawSVG:'0%',
  ease:Power2.easeIn
}, '-=1')
.to(crossLongLine, 1, {
  drawSVG:'72% 3%',
  ease:Back.easeOut
})
.to(crossShortLine, 1, {
  drawSVG:'100% 3%',
  ease:Back.easeOut
}, '-=1')


crossContainer.addEventListener('click', function(){
  
  if(crossTl.time() === 0){
      crossTl.play(0);
  }

  
})