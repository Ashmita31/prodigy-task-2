var ms=0,s=0,m=0,h=0;
var timer;/*will store the interval timer id which isused to control timing fn*/
var display=document.querySelector(".timer-display");
/*document.querySelector is used to get the first element within the document*/
var laps=document.querySelector(".laps");
/*function start is used to start the timer if not started already
setInterval is used to repeatedly execute the run function 100 milliseconds*/
function start(){
    if(!timer){
        timer=setInterval(run,10);
    }
}
/*run function is used display ++++++++++++++++and increment millisecond
here the process is incrementing ms by 1 and the when IT READES 100ms
it resets to 0 and seconds gets incremented*/

/*when it reaches 60 it resets and m minutes is incremented and
when m reaches 60 it resets and h is incremented and
when h reaches 13 it resets to 1*/

function run(){
/* display.innerHTML you retrieve the entire content within the elemen
getTimer() formats the time variables(h,m,s,ms)*/
    display.innerHTML=getTimer();
    ms++;
    if(ms==100){
        ms=0;
        s++;
    }
    if(s==60){
        s=0;
        m++;
    }
    if(m==60){
        m=0;
        h++;
    }
    if(h==13){
        h=1;
    }
}
/*If h (hours) is a single digit (0-9),
 it adds a "0" before it (e.g., if h is 5, it becomes "05").
If h is a double-digit number (10 or above), 
it remains the same (e.g., if h is 11, it stays "11")*/

function getTimer(){
    return (h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s)+":"+(ms<10?"0"+ms:ms);
}

function pause(){
     stopTimer();
}

/*clearInterval, effectively pausing the stopwatch.
 The timer variable is set to false to indicate that the stopwatch is not running*/

function stopTimer(){
    clearInterval(timer);
    timer=false;
}
/*reset: Stops the timer and 
resets all time variables to 0, then updates the display.*/
function reset(){
    stopTimer();
    ms=0;
    s=0;
    m=0;
    h=0;
    display.innerHTML=getTimer();
}
/*restart: Resets and 
restarts the stopwatch if it’s currently running*/
function restart(){
        reset();
        start();
}
/*lap: Captures the current time and adds it as a
 new list item (<li>) in the laps element,
  allowing you to record specific times*/
function lap(){
    if(timer){
        var li=document.createElement("li");
        li.innerHTML=getTimer();
        laps.appendChild(li);
    }
}
function resetLap(){
    laps.innerHTML = "";
}
