var output = [];
var cont = 1;
function fizzbuzz(){
    if (cont % 3 === 0 && cont % 5 === 0){
        output.push("FizzBuzz");
    } else if(cont % 3 === 0){
        output.push("Fizz");
    } else if(cont % 5 === 0){
        output.push("Buzz");
    } else{
        output.push(cont);
    }
    cont++;
    console.log(output);
}
fizzbuzz();