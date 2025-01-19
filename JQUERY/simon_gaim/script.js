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
function simon_klik(){
    $("div").click(function(){
        arr_click.push(this.ClassName);
    });
}
simon_klik()
while(arr_click.length > arr.length){
}
console.log(arr_click);
console.log(arr);