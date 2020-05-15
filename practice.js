
let charsCorrect = 0;
let charsIncorrect = 0;
let accuracy;
let playersCurrentLetter = 0;
let ready = document.getElementById("start"); // the button used to start the timer and add the text
let textArea = document.getElementById("window"); // the window where the text the player types is displayed
let text = document.createElement("h2"); // the text that the player must type
let typingArea = document.getElementById("typeArea"); // the box where the player types
let randTextSelector = 0; // selects a random piece of text in the array
let typingText = [ "An Ox came down to a reedy pool to drink. As he splashed heavily into the water, he crushed a young Frog into the mud.The old Frog soon missed the little one and asked his brothers and sisters what had become of him."];
let textChars = typingText[randTextSelector].split(""); // splits the text into pieces and puts it in an array so the players typing can be checked
console.log(textChars);
text.style.lineHeight = 2;
text.style.fontFamily =  'VT323';


let countdown = 60; 

function addTime(){
    // this portion of the code changes the timer 
    if(countdown > 0){
        if(countdown < 10){
            countdown--;
            timer.innerText = "Time: 0:0" + countdown;
        }else{
            countdown--;
            timer.innerText = "Time: 0:" + countdown;
        }
    }
    
}

if(countdown == 0){
    countdown = 60;
    ready.addEventListener("click" , () => {
        text.innerText = typingText[randTextSelector];
        textArea.appendChild(text);
        setInterval(addTime, 1000);
    })
}

ready.addEventListener("click" , () => {
    ready.innerText = "Restart"; //This line changes the ready button to a restart button
    ready.style.backgroundColor = "red"; // changes color of the ready button
    //this code adds the text & starts the countdown timer for practice page 
    text.innerText = typingText[randTextSelector];
    textArea.appendChild(text);
    setInterval(addTime, 1000);
})


// this event listener checks to see if the letter that the player is typing is correct
typingArea.addEventListener("keypress", () => {
    if(typingArea.innerHTML === textChars[playersCurrentLetter]){
        charsCorrect++;
        playersCurrentLetter++;     
    }else{
        charsIncorrect++
        playersCurrentLetter
    }
    console.log(charsCorrect);
})





