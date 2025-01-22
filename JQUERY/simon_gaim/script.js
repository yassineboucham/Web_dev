$("body").keypress(function(){
    $("h1").text("Level 1");
    let arr = [];
    let Level = 1;
    function simon_random_klik(){
        let rand = Math.floor((Math.random() * 4) + 1)
        arr.push(rand)
        Level++;
    }
    function click_random(nb){
        if(nb == 1){
            $("#green").animate({opacity: '0.4'}).animate({opacity: '1'});
        }
        if(nb == 2){
            $("#red").animate({opacity: '0.4'}).animate({opacity: '1'});
        }
        if(nb == 3){
            $("#yellow").animate({opacity: '0.4'}).animate({opacity: '1'});
        }
        if(nb == 4){
            $("#blue").animate({opacity: '0.4'}).animate({opacity: '1'});
        }
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
        $("h1").text("Level " + Level);
        arr_click.push(this.className);
        if(arr[arr_click.length - 1] != arr_click[arr_click.length - 1]){
            console.log("Gami over");
            $("h1").text("Gami over");
            arr_click = [];
            arr = [];
            return;
        }
        if(arr_click.length == arr.length){
            arr_click = [];
            console.log("level:" + Level);
            simon_random_klik();
            for(let i = 0; i < arr.length; i++){
                console.log(arr[i]);
                click_random(arr[i]);
            }
        }
        console.log(arr);
        console.log(arr_click);
    });
});