function ljam3(n1, n2){
    return n1 + n2;
}

function tarh(n1, n2){
    return n1 - n2;
}

function l9isma(n1, n2){
    return n1 / n2;
}

function darb(n1, n2){
    return n1 * n2;
}

function mod(n1, n2){
    return n1 % n2;
}

function calculator(n1, n2, operator){
    return operator(n1, n2);
}

console.log(calculator(5, 4, darb));