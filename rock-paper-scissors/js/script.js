const SISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";

let userInput = prompt("가위, 바위, 보");

if(userInput !== '가위' && userInput !== '바위' && userInput !== '보'){
    alert('가위 바위 보 중 하나를 입력해야 합니다.');
} else {
    let comInput;

    let rnd = Math.random();

    if(rnd < 0.33){
        comInput = SISSORS;
    } else if(rnd < 0.66){
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }


    if(userInput === '가위'){
        if(comInput === SISSORS){
            alert('컴퓨터: ' + comInput + "- 컴퓨터와 비겼습니다.");
        } else if (comInput === ROCK){
            alert('컴퓨터: ' + comInput + "- 컴퓨터에게 졌습니다.");
        } else {
            alert('컴퓨터: ' + comInput + "- 컴퓨터를 이겼습니다.");
        }
    }
}