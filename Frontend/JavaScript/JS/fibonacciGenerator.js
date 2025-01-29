function fibonacciGenerator(number){
    var arr = [0, 1];
    var inc = 1;
    while(arr.length < number){
        arr.push(arr[inc - 1] + arr[inc]);
        inc++;
    }
    if (number == 1){
        return [0];
    }
    return arr;
}
console.log(fibonacciGenerator(0));