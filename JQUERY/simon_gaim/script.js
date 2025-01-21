$("body").keypress(function(){
    $("h1").text("Level 1");
let arr = [];
let Level = 1;
function simon_random_klik(){
    let rand = Math.floor((Math.random() * 4) + 1)
    arr.push(rand)
    Level++;
}
function style_click(check){
    if(check == 1 || check == 0){
        $("#green").click(function(){
            $(this).animate({opacity: '0.7'}).animate({opacity: '1'});
        });
    }
    if(check == 2 || check == 0){
        $("#red").click(function(){
            $(this).animate({opacity: '0.7'}).animate({opacity: '1'});
        });
    }
    if(check == 3 || check == 0){
        $("#yellow").click(function(){
            $(this).animate({opacity: '0.7'}).animate({opacity: '1'});
        });
    }
    if(check == 4 || check == 0){
        $("#blue").click(function(){
            $(this).animate({opacity: '0.7'}).animate({opacity: '1'});
        });
    }
}
style_click(0);
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
    $("h1").text("Level " + Level);
    if(arr_click.length == arr.length){
        arr_click = [];
        console.log("level:" + Level);
        simon_random_klik();
    }
    console.log(arr);
    console.log(arr_click);
});
});