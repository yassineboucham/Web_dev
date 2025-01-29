function whosPaing(names){
    var randemAddres = Math.floor((Math.random() * names.length));
    return names[randemAddres] + " is going to buy lunch today!"
}
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaing(names));