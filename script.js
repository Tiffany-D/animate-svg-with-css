//const anime = require('animejs');



// variables 
const locationShape = document.querySelector('#location-shape');



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


