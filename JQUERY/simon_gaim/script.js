$("body").keypress(function(){
    $("h1").text("Level 1")
});
let arr = [];
let Level = 1;
function simon_random_klik(){
    let rand = Math.floor((Math.random() * 4) + 1)
    arr.push(rand)
    Level++;
}
$("#green").click(function(){
    $(this).animate({opacity: '0.7'}).animate({opacity: '1'});
});
$("#red").click(function(){
    $(this).animate({opacity: '0.7'}).animate({opacity: '1'});
});
$("#yellow").click(function(){
    $(this).animate({opacity: '0.7'}).animate({opacity: '1'});
});
$("#blue").click(function(){
    $(this).animate({opacity: '0.7'}).animate({opacity: '1'});
});
simon_random_klik();
let arr_click = [];
console.log(arr);
$("div").click(function(){
    arr_click.push(this.className);
    if(arr[arr_click.length - 1] != arr_click[arr_click.length - 1]){
        console.log("Gami over");
        arr_click = [];
        arr = [];
        return;
    }
    if(arr_click.length == arr.length){
        arr_click = [];
        simon_random_klik();
        console.log("level:" + Level);
    }
    console.log(arr);
    console.log(arr_click);
});