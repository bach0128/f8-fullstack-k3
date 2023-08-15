// Bai 1:
function Bai1() {
    var arr1 = [15, 10, 20, 30, 40, 50, 50, 15, 10];
    n = arr1.length;
    var min = arr1[0];
    var max = arr1[0];
    for (var i = 1; i < n; i++) {
        if ( min > arr1[i] ) {
            min = arr1[i];
        }
        if ( max < arr1[i] ) {
            max = arr1[i];
        }
    }
    for (index in arr1) {
        if (arr1[index] === min) {
            console.log("Số nhỏ nhất trong mảng là", min, "vị trí", index, "trong mảng")
        }

        if (arr1[index] === max) {
            console.log("Số lớn nhất trong mảng là", max, "vị trí", index, "trong mảng")
        }
    }
}

Bai1();

// Bai 2:
function Bai2() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 9, 11, 7];
    var primeArr = arr.filter(function(arrChild) {
        if (isPrime(arrChild)) {
            return arrChild
        }
    })
    
    function isPrime(n) {
        if (n <= 1 || n % 1 !== 0) return false;
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
            return false;
            }
        }
        return true;
    }

    const h = primeArr.length ;
    var result = h === 0 ? console.log("Không có số nguyên tố") : averagePrime(primeArr);
    function averagePrime(primeArr) {
        var total = 0;
        for (index in primeArr) {
            total += primeArr[index]
        }
        return total / h;
    }

    console.log("Baì 2: Average prime", result); 
}

Bai2()

// Bai 3:

function Bai3() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 7, 2, 3, 4]
    var result = arr.reduce(function(newArr, number) {
        newArr.includes(number) ? newArr : newArr.push(number)
        return newArr
    }, [])
    console.log("Bài 3", result)
}

Bai3()

// Bai 4:

function Bai4() {
    var numbers = [5, 1, 9, 8, 10];
    var element = 4;
    var result = [];
    var count = numbers.length;
    numbers.sort( function(a, b) {
        if (a < b) {
            return -1;
        }
    })
        if (element <= numbers[0]) {
            result = [element, ...numbers]
        } else if (element >= numbers[count - 1]) {
            result = numbers
            result.push(element)
        } else {
            numbers.forEach(function(number, index) {
                if (number < element && element <= numbers[index + 1]) {
                    result = numbers.slice(0, index + 1);
                    result.push(element)
                    result.push(...numbers.slice(index + 1, count));
                }
            })
        }
    console.log("Bài 4",result)
}
    Bai4()
