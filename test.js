// let sum = 0;

// for(let i=1; i<=10; i++){
//     let value = prompt("숫자를 입력해주세요.");

//     sum += Number(value);
// }

// let avg = sum /10;

// alert("평균값" + avg);



// ----------------------------------------------

let totalNumbers = Number(prompt("숫자의 개수를 입력해주세요."));

let sum = 0;
for(let i=1; i <=totalNumbers; i++){
    let value = prompt(i + "번 숫자를 입력해주세요.");
    sum += Number(value);
}

let avg = sum /totalNumbers;

alert("평균값:" + avg);