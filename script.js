// Type carousel tweaked from https://speckyboy.com/css-javascript-text-animation-snippets/ 
// Now uses jQuery
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  $(this.el).html('<span class="wrap">' + this.txt + '</span>');

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};
//JS 
/*
window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var period = elements[i].getAttribute('data-period');
    var toRotate = ["I\'m Millie.", "it\'s me.", "how are you?", "and welcome."];
    new TxtRotate(elements[i], toRotate, period);
  } */

//jQuery 
$(document).ready(() => {
  let elements = $(".txt-rotate");
  for (let i = 0; i < elements.length; i++) {
    let period = $(elements[i]).attr('data-period');
    let toRotate = ["I\'m Millie.", "it\'s me.", "how are you?", "and welcome."];
    new TxtRotate(elements[i], toRotate, period);
  }
});


// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
document.body.appendChild(css);


//Return to top
$(document).ready(() => {
  $('#goTop').on('click', function (e) {
    $("html, body").animate({ scrollTop: $("#top").offset().top }, 500);
  });
  /*
  $About2.on('mouseenter', () => {
    $nav_menu.show();
  });
  
  $About2.on('mouseleave', () => {
    $nav_menu.hide();
  }); */

});
