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
simon_random_klik();
simon_random_klik();
simon_random_klik();
simon_random_klik();
let arr_click = [];
console.log(arr);
$("div").click(function(){
    arr_click.push(this.className);
    console.log(arr);
    console.log(arr_click);
    if(arr[arr_click.length] != arr_click[arr_click.length]){
        console.log("Gami over");
        arr = [];
    }
    if(arr_click.length != arr.length){
        return;
    }
});