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


const calculator = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
};

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-")); 
console.log(calculator(10, 5, "*")); 
console.log(calculator(10, 5, "/")); 
console.log(calculator(10, 0, "/"));
console.log(calculator(10, 5, "^")); 