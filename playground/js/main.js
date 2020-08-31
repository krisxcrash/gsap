// const tlanimation = new TimelineMax();

// // GSAP Easing options (https://greensock.com/docs/v2/Easing)

// // tlanimation.to('.circle', 1, {x: 100, ease: Back.easeOut})
// //   .to('.square', 1, {x: 100, ease: Back.easeOut})
// //   .to('.rectangle', 1, { x: 100, ease: Back.easeOut });

// // // Stagger Method
// // TweenMax.staggerFrom('.triangle ', 1, {
// //   x: 200,
// //   y: 200,
// //   opacity: 0,
// //   ease: Back.easeOut
// // }, 0.1);

// // TweenMax.set('.oval', { x: -100 });

// const tlanimationRepeat = new TimelineMax({repeat:-1, repeatDelay: 2});

// tlanimationRepeat.to('.oval', 1, { x: 100 })
//   .to('.oval', 1, { x: -100 });


// const tlanimationRepeat = new TimelineMax({ repeat: -1, yoyo: true });

// tlanimationRepeat.to('.oval', 1, { x: 100 });

//Labels and timelines

var tlshapes = new TimelineMax();
// tlshapes.to('.circle', 1, { x: 100 }, 'circleRectangle')
//   .to('.square', 1, { x: 100 })
//   .to('.rectangle', 1, { x: 100 }, 'circleRectangle+=0.25'); 

//+=0.25 makes it animate slightly after the circle with the label

// tlshapes.to('.circle', 1, { x: 100 })
//   .to('.square', 1, { x: 100 }, '-=0.5')
//   .to('.rectangle', 1, { x: 100 }, '-=0.5'); 

// tlshapes.to('.circle', 1, { x: 100 })
//   .to('.square', 1, { x: 100 })
//   .to('.rectangle', 1, { x: 100 }, 5);  //absolute timing of 5 seconds for the rectangle

tlshapes.staggerFrom('.shape', 0.5, { x: 50, y: 50, opacity: 0 }, 0.2);

$('.playButton').click(function() {
  tlshapes.play();
});

$('.pauseButton').click(function() {
  tlshapes.pause();
});

$('.resumeButton').click(function() {
  tlshapes.resume();
});

$('.reverseButton').click(function() {
  tlshapes.reverse();
});

$('.slowButton').click(function() {
  tlshapes.timeScale(0.5);
});

$('.fastButton').click(function() {
  tlshapes.timeScale(2);
});

$('.seekButton').click(function() {
  tlshapes.seek(2); //params: will jump in timeline - ie: 2 => 2 seconds in timeline
});

$('.progressButton').click(function() {
  tlshapes.progress(0.2); //value between 0 & 1 that represents % of timeline
});

// fromTo staggerFromTo tweens
// TweenMax.fromTo('.circle', 1, { x: -100, scale: 0 }, { x: 100, scale: 1.5 });
// TweenMax.staggerFromTo('.triangle', 1, { x: 200, y: 200 }, { x: -50, y: -50}, 0.2);