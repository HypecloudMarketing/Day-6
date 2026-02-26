// function printName(name) {
//     console.log("Hello", name);
// }

// printName("Vy");
// printName("Khang");
// printName("Quoc");

// function introduce(name, age, address) {
//     console.log(`Xin chao, toi ten la ${name}, nam nay toi ${age} tuoi, toi dang sinh song o ${address}`);
// }

// introduce("Tuan", 25, "Ha Noi");
// introduce("Khang", 20, "Da Lat");

// function calculatePytago (canhGocVuong1, canhGocVuong2) {  
//     let canhHuyen = Math.sqrt(canhGocVuong1 * canhGocVuong1 + canhGocVuong2 * canhGocVuong2);
//     return canhHuyen;
// }

// let canhGocVuong1 = 3;
// let canhGocVuong2 = 4;
// let canhHuyen = calculatePytago(canhGocVuong1, canhGocVuong2);
// console.log("Canh huyen la:", canhHuyen);

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Lỗi: Không thể chia cho 0";
            }
            break;
        default:
            result = "Lỗi: Phép toán không hợp lệ";
    }
    return result;
}

let num1 = 10;
let num2 = 5;
let operator = "+";
let calculationResult = calculator(num1, num2, operator);
console.log(`Kết quả của ${num1} ${operator} ${num2} là:`, calculationResult);