// Bai 1:

function payTaxi(amount) {
    let payForTaxi = 0;
    if (amount > 0 && amount <= 1) {
            payForTaxi = amount * 150000;
        } else if (amount <= 5) {
            payForTaxi = 150000 + (amount - 1) * 13500;
        } else if (amount <= 120) {
            payForTaxi = 150000 + 54000 + (amount - 5) * 11000;
        }  else if (amount > 120 ) {
            payForTaxi = (150000 + 54000 + (amount - 5) * 11000) * 0.9;
        }
    console.log("EX01:" , payForTaxi);
    return payForTaxi;
}


// Bai 2:

function electricityBills(count) {
    let totalBill = 0;
    var tier;

    if (count >=0 && count <= 50) {
        tier = 1
    } else if (count <= 100) {
        tier = 2
    } else if (count <= 200) {
        tier = 3
    } else if (count <= 300) {
        tier = 4
    } else if (count <= 400) {
        tier = 5
    } else {
        tier = 6
    }

    switch (tier) {
        case 1:
            totalBill = count * 1.678;
            break;
        case 2:
            totalBill = 83.9 + (count - 50) * 1.734;
            break;
        case 3:
            totalBill = 170.6 + (count - 100) * 2.014;
            break;
        case 4:
            totalBill = 372 + (count - 200) * 2.536;
            break;
        case 5:
            totalBill = 625.6 + (count - 300) * 2.834;
            break;
        case 6: 
            totalBill = 909 + (count - 400) * 2.927;
            break;
    }

    console.log("EX02", totalBill)
    return totalBill;
}

// Bai 3

function calculateTotal(n) {
    let S = 0;
    if (n >= 2) {
        for (i = 1; i <= n; i++) {
            S += i * (i + 1)
        }
    }
    console.log("EX03", S)
}

// Bai 4
function checkPrime(n) {
    
    if (n > 1 && n % 2 !== 0) {
        if (n == 2 || n == 3) {
            console.log("EX04", n, "Là số nguyên tố")
        } else {
            for (i = 3 ;i < n; i += 2) {
                if (n % i == 0) {
                console.log("EX04", n, "Không phải là số nguyên tố")
                } else {
                    console.log("EX04", n, "là số nguyên tố")
                    
                }
            }
        }
        return n
    } else {
        console.log("EX04", n, "Không phải là số nguyên tố")
    }
}

// Bai 5

function drawTriangle(row) {
    let count = 1;
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(count, " ");
            count++;
        }
        document.write("<br/>");
    }
}

drawTriangle(4)

// Bai 6 

var drawChess = () => {
    for (i = 1; i <=8 ; i++) {
        for (j = 1; j <=8; j++) {
            if (i % 2 == 1 && j % 2 == 1) {
                document.write(
                    `<span style="display:inline-flex; width: 30px; height: 30px; border: 1px solid #000; background: #000"></span>`
                );
            } else if (i % 2 == 1 && j % 2 == 0) {
                document.write(
                    `<span style="display:inline-flex; width: 30px; height: 30px; border: 1px solid #000; background: #fff"></span>`
                );
            }

            if (i % 2 == 0 && j % 2 == 1) {
                document.write(
                    `<span style="display:inline-flex; width: 30px; height: 30px; border: 1px solid #000; background: #fff"></span>`
                );
            } else if (i % 2 == 0 && j % 2 == 0) {
                document.write(
                    `<span style="display:inline-flex; width: 30px; height: 30px; border: 1px solid #000; background: #000"></span>`
                );
            }

            if (j == 8) {
                document.write("<br>")
            }
        }
    }
}

drawChess()

//  Bai 7 

var veBangCuuChuong = () => {
    for (i = 1; i <= 10; i++) {
        for (j = 1; j <= 10; j++) {
            document.write(i, "*", j, "=", i*j, "<br>")
        }
    }
}
veBangCuuChuong();

// Bai 8

function total(n) {
    var total = 0;
    let i = 1;
    while (i <= n) {
        total += 1/i
        i++
    }
    console.log("Ex08", total)
    return total
}

