$(document).ready(function() {

   //Global Variables

var randNum=0
var totalScore=0;
var winCount=0;
var lossCount=0;
var rubyCount=0;
var emeraldCount=0;
var topazCount=0;
var amethystCount=0;



    //Functions
function gameStart() {

$("#totalwins").text(winCount);
$("#totallosses").text(lossCount);

    //Reset
randNum = Math.floor(Math.random() * 120) + 19;
rubyCount=Math.floor(Math.random() * 12) + 1;
topazCount=Math.floor(Math.random() * 12) + 1;
emeraldCount=Math.floor(Math.random() * 12) + 1;
amethystCount=Math.floor(Math.random() * 12) + 1;
totalScore=0;

console.log(randNum);  
console.log("ruby count: "+rubyCount);
console.log("topaz count: "+topazCount);
console.log("emerald count: "+emeraldCount);
console.log("amethyst count: "+amethystCount);

$("#rand-num").text(randNum);
$("#score").text(totalScore);

}

$("#ruby").on("click", function(){
    totalScore=totalScore+rubyCount;
    $("#score").text(totalScore);
    console.log(totalScore);
    numberCheck();
});

$ ("#topaz").on("click", function(){
    totalScore=totalScore+topazCount;
    $("#score").text(totalScore);
    console.log(totalScore);
    numberCheck();
});

$ ("#emerald").on("click", function() {
    totalScore=totalScore+emeraldCount;
    $("#score").text(totalScore);
    console.log(totalScore);
    numberCheck();
});


$("#amethyst").on("click", function(){
    totalScore=totalScore+amethystCount;
    $("#score").text(totalScore);
    console.log(totalScore);
    numberCheck();
});

function numberCheck(){

console.log ("Win Count: " + winCount + " | Loss Count: " + lossCount);

if (totalScore==randNum) {
    winCount++;
    console.log(winCount)
    $("#totalwins").text(winCount);
    gameStart();
};

if (totalScore>randNum){
    lossCount++;
    console.log(lossCount);
    $("#totallosses").text(lossCount);
    gameStart();
};
}


//Event Listeners

gameStart();

})