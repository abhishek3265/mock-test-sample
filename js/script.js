var elem = document.getElementById("fullscreen");

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function startTimer( ){
    var duration=3600; 
    var display = document.querySelector('#time');
    var timer = duration, minutes, seconds,hours;
    setInterval(function () {
        
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =  minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            document.getElementById('fullscreen').innerHTML ="Session Expired";
        }
    }, 1000);

}

function start() {
    //toggle and start timer question section
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
        x.style.display = "block";
        
    } else {
        x.style.display = "block";
    }
    //to start timer
    startTimer();
    //to disable the button
    $("#start").attr("disabled", true);
    
        
   

  
};