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


// const calculator = (num1, num2, operator) => {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             if (num2 === 0) {       
//                 return "Loi: Khong the chia cho 0";
//             }
//             return num1 / num2;
//         default:
//             return "Loi: Operator khong hop le";
//     }
// };

// console.log(calculator(10, 5, "+"));
// console.log(calculator(10, 5, "-")); 
// console.log(calculator(10, 5, "*")); 
// console.log(calculator(10, 5, "/")); 
// console.log(calculator(10, 0, "/"));

const findDayOfWeek = (ngay, thang, nam) => {
  if (thang < 1 || thang > 12){
    return "Invalid month";
  }
  let maxday = 31
  if (thang ===4 || thang === 6 || thang === 9 || thang === 11) {
    maxday = 30
  }
  if (thang === 2) {
    maxday = 28
  }
  if ( ngay < 1 || ngay > maxday) {
    return "Invalid day";
  }
  const d = new Date(nam, thang -1 , ngay).getDay();
  if (d === 0) return "Chu Nhat";
    if (d === 1) return "Thu Hai";
    if (d === 2) return "Thu Ba";
    if (d === 3) return "Thu Tu";
    if (d === 4) return "Thu Nam";
    if (d === 5) return "Thu Sau";
    if (d === 6) return "Thu Bay";
}
console.log(findDayOfWeek(12, 9, 2025));