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
//jQuery on() Method
$("p").on("click", function(){
  alert("The paragraph was clicked.");
});
//jQuery after() Method
//Insert content after each <p> element:
$("button").click(function(){
  $("p").after("<p>Hello world!</p>");
});
//jQuery before() Method
// Insert content before each <p> element:
$("button").click(function(){
  $("p").before("<p>Hello world!</p>");
});
//jQuery prepend() Method
//Insert content at the beginning of all <p> elements:
$("button").click(function(){
  $("p").prepend("<b>Prepended text</b>");
});
//jQuery append() Method
//Insert content at the end of all <p> elements:
$("button").click(function(){
  $("p").append("<b>Appended text</b>");
});
//jQuery hide() Method
//Hide all <p> elements:
$("button").click(function(){
  $("p").hide();
  $("p").hideToggle();
});
//jQuery fadeIn() Method
//Fade in all <p> elements:
$("button").click(function(){
  $("p").fadeIn();
  $("p").fadeInToggle();
});
/*
jQuery Sliding Methods
With jQuery you can create a sliding effect on elements.

jQuery has the following slide methods:

slideDown()
slideUp()
slideToggle()
*/