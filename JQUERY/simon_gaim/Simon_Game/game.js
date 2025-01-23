let buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];
let level = 0;
let check = false;
function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
    
}
function nextSequence(){
    level++;
    $("h1").text("Level: " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}
$(".btn").click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

$("body").keypress(function(){
    if(!check){
        $("h1").text("Level: " + level);
        nextSequence();
        check = true;
    }
});