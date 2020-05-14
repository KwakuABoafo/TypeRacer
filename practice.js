let timer = document.getElementById("time");
let time = 60;

timer.addEventListener("load" , function(){
    setInterval(changeTime, 1000);
})

function changeTime(){
    if(time > 0){
        timer.innerHtml = "" + (time - 1);
        console.log((time - 1));
        time--;
    }
}