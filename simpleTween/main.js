// TweenMax (filesize: 116kb minified - includes everything)

TweenMax.to('.circle', 1, {
  x: 150,
  y: 150,
  backgroundColor: 'blue'
});


TweenMax.to('.square', 2, {
  x: -150,
  y: -150,
  scale: 2, 
  delay: 1,
  ease: Back.easeOut
});

TweenMax.from('#rectangle', 2, {
  y: 200,
  rotation: 180,
  scale: 1.5
});

TweenMax.to($('li:first-child'), {
  x: 50
})
TweenMax.to($('li:nth-child(2)'), {
  x: 50,
  delay: .1
})
TweenMax.to($('li:nth-child(3)'), {
  x: 50,
  delay: .2
})
TweenMax.to($('li:nth-child(4)'), {
  x: 50,
  delay: .3
})
TweenMax.to($('li:last-child'), {
  x: 50,
  delay: .4
})

// TweenLite (lightweight 28kb minified and has plugins)
// TimelineMax and TimelineLite (max has more features)

// gsap.to(".green", { duration: 3, rotation: 360, scale: 0.5 });
