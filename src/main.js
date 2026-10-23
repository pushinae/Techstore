function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}

function sayHi(who) {
    alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John");


function defer(sayHi, 2000) {
    return function() {
        setTimeout(() => sayHi.apply(this, John), 2000)
    };
}