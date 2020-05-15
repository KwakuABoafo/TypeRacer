let practice = document.getElementById("practice");
let compete = document.getElementById("compete");
let tourney = document.getElementById("tourney");

practice.addEventListener("click", () => {
    practice.href = "practice.html";
});


compete.addEventListener("click" , () => {
    compete.href = "compete.html";
})

tourney.addEventListener("click" , () => {
    tourney.href = "tourney.html";
})
