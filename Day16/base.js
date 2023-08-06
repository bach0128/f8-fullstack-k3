// Ex01

var a = 5, b = 10;
b += a;
a = b - a;
b = b - a;

console.log("EX01" , a, b);

// Ex02

var S = 10 + 20 + 5**10/2;
console.log("EX02", S);

// EX03

var x = 4.5, y = 4, z = 5;
if (x < y) {
    if (y < z) {
        console.log("EX03" , z)
    } else {
        console.log("EX03" , y); 
    }
} else if (x < z) {
    x = z;
    console.log("EX03" , x);
} else {
    console.log("EX03" , x);
}

// EX04

var c = 10, d = 10;
if (c*d != 0) {
    if (c*d < 0) {
        console.log("EX04", "Hai số không cùng dấu") 
    } else {
        console.log("EX04", "Hai số cùng dấu") 
    }
} else {
    console.log("EX04" , "Có 1 số bằng 0")
}

// EX05
var min,max;
var i = 100, j = 20, k = 30;
var total = i + j + k;

if (i < j) {
    if (j < k) {
        max = k
    } else {
        max = j
    }
} else if ( i > k ) {
    max = i
} else {
    max = k
}

if (i < j) {
    if (i < k) {
        min = i
    } else {
        min = k
    }
} else if (j < k) {
    min = j
} else {
    min = k
}

var mid = total - max - min;

console.log("EX05", min, mid, max)