



// select element to animate
const locationShape = document.querySelector('#location-shape');


// SVG map
anime({
    targets: locationShape,
      keyframes: [
    {translateY: 50, easing: 'linear'},
    {translateX: -100, easing: 'linear'},
    {translateY: -120, easing: 'linear'},
    {translateX: 60, easing: 'linear'},
    {translateY: 0}
  ],
    duration: 6000

});


// animate coding tag

anime({
  targets: '#dots',
  translateY: 150,
  direction: 'alternate',
  easing: 'easeInOutQuad',
  loop: true,
  duration: 1000,
});

anime({
  targets: '#tag-1',
  translateY: 120,
  direction: 'reverse',
  easing: 'easeInOutQuad',
  loop: true,
  duration: 2000,
});

anime({
  targets: '#tag-2',
  translateX: 120,
  direction: 'reverse',
  easing: 'easeInOutQuad',
  loop: true,
  duration: 2000,
});
