
// side nav

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


    //Loading bar
;function(){ // basic code to dismiss page transition after page has loaded
 
    var minloadingtime = 100
    var maxloadingtime = 3000
     
    var startTime = new Date()
    var elapsedTime
    var dismissonloadfunc, maxloadingtimer
     
    window.addEventListener('load', dismissonloadfunc = function(){ // when page loads
        clearTimeout(maxloadingtimer) // cancel dismissal of transition after maxloadingtime time
        elapsedTime = new Date() - startTime // get time elapsed once page has loaded
        var hidepageloadertimer = (elapsedTime > minloadingtime)? 0 : minloadingtime - elapsedTime
     
        setTimeout(function(){
            document.getElementById('pageloader').classList.add('dimissloader') // dismiss transition
        }, hidepageloadertimer)
     
    }, false)
     
    maxloadingtimer = setTimeout(function(){ // force dismissal of page transition after maxloadingtime time
        window.removeEventListener('load', dismissonloadfunc, false) // cancel onload event function call
        document.getElementById('pageloader').classList.add('dimissloader') // dismiss transition
    }, maxloadingtime)
 
})();
//in case browser does not support transition

;(function(){ // Final page transition code
 
    var animation = false,
    animationstring = 'animation',
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
    pfx = '',
    elm = document.createElement('div');
     
    if( elm.style.animationName !== undefined ) { animation = true; } 
     
    if( animation === false ) {
        for( var i = 0; i < domPrefixes.length; i++ ) {
            if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
                pfx = domPrefixes[ i ];
                animationstring = pfx + 'Animation';
                keyframeprefix = '-' + pfx.toLowerCase() + '-';
                animation = true;
                break;
            }
        }
    }
     
    var minloadingtime = 100
    var maxloadingtime = 3000
     
    var startTime = new Date()
    var elapsedTime
    var dismissonloadfunc, maxloadingtimer
     
    if (animation && document.documentElement && document.documentElement.classList){
        document.documentElement.classList.add('hidescrollbar')
         
        window.addEventListener('load', dismissonloadfunc = function(){ // when page loads
            clearTimeout(maxloadingtimer) // cancel dismissal of transition after maxloadingtime time
            elapsedTime = new Date() - startTime // get time elapsed once page has loaded
            var hidepageloadertimer = (elapsedTime > minloadingtime)? 0 : minloadingtime - elapsedTime
             
            setTimeout(function(){
                document.getElementById('pageloader').classList.add('dimissloader') // dismiss transition
            }, hidepageloadertimer)
             
            setTimeout(function(){
                document.documentElement.classList.remove('hidescrollbar')
            }, hidepageloadertimer + 100) // 100 is the duration of the fade out effect
         
        }, false)
         
        maxloadingtimer = setTimeout(function(){ // force dismissal of page transition after maxloadingtime time
            window.removeEventListener('load', dismissonloadfunc, false) // cancel onload event function call
                document.getElementById('pageloader').classList.add('dimissloader') // dismiss transition
             
            setTimeout(function(){
                document.documentElement.classList.remove('hidescrollbar')
            }, 100) // 100 is the duration of the fade out effect
        }, maxloadingtime)
     
     
    }
    else{
        document.getElementById('pageloader').style.display = 'none'
    }
 
})();


// Type carousel
var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {

      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.value =this.txt;

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

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
        var element = document.getElementById('myInput');
        var toRotate = element.getAttribute('data-rotate');
        var period = element.getAttribute('data-period');
         new TxtRotate(element, JSON.parse(toRotate), period);

      }
    
