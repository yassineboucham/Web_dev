// Selecting Elements
console.log($("#i")); // select by id
console.log($("h1")); // select by atrebute
console.log($(".c")); // select by atrebute
//Manipulating Styles
//css style
$("h1").css("background-color", 'blue')
$(document).ready(function() {
    $("h1").css("color", "red");
})
$("h1").css({"with": "90px", "font-size" : "24px"})

// Manipulating Text
//get text
console.log($("h1").text())
//set text
$("h1").text("hajar <br>")
//set html
$(".ca").html("<p>hello world</p>")

//Manipulating Attributes
//Get an attribute
console.log($("h1").attr("id"));
//set
$(".ca").html("<a>link</a>")
$("a").attr({"href": "#", "class": "n"})
$("a").removeAttr("class")
