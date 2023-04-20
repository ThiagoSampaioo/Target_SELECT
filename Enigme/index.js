
const SeqA = () => {
    var cond = 5;
    var e = 1;
    var array = [];
    for (var i = 0; i < cond; i++) {
        array[i] = e;
        e += 2;
    }
    return console.log(array);
}
const SeqB = () => {
    var cond = 7;
    var e = 2;
    var array = [];
    for (var i = 0; i < cond; i++) {
        array[i] = e;
        e *= 2;
    }
    return console.log(array);
}
const SeqC = () => {
    var cond = 8;
    var e = 0;
    var a = 1;
    var array = [];
    for (var i = 0; i < cond; i++) {
        array[i] = e;
        e +=a;
        a +=2;
    }
    return console.log(array);
}
const SeqD = () => {
    var cond = 5;
    var e = 0;
    var a = 0; 
    var array = [];
    for (var i = 0; i < cond; i++) {
        a+=2;
        e=a**2;
        array[i] = e;
    }
    return console.log(array);
}
const SeqE = () => {
    var cond = 7;
    var e = 1;
    var a = []; 
    var array = [e];
    for (var i = 1; i < cond; i++) {
        array[i]=e;
        a=array.at(-2);
        e+=a;
    }
    return console.log(array);
}
const SeqF = () => {
var a = [2,10,12,16,17,19,200]
return console.log(a);
}
SeqA();
SeqB();
SeqC();
SeqD();
SeqE();
SeqF();