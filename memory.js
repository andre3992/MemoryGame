const turn = document.querySelectorAll('.hidden');
let cardsFlippen = 0;
let checkResult = [];
let cardsTurned = [];

checkCards = () => {
    if (cardsFlippen === 2) {
        if (checkResult[0] === checkResult[1]) {
            checkResult = [];
            cardsFlippen = 0;
        } else {
            cardsTurned[0].classList.remove("shown");
            cardsTurned[1].classList.remove("shown");
            checkResult = [];
            cardsFlippen = 0;
            cardsTurned = [];
        }
    }
};


turn[0].addEventListener('click', () => {
    turn[0].classList.add("shown");
    checkResult.push(turn[0].innerText);
    cardsFlippen++;
    cardsTurned.push(turn[0]);
    checkCards();
});
turn[1].addEventListener('click', () => {
    turn[1].classList.add("shown");
    checkResult.push(turn[1].innerText);
    cardsFlippen++;
    cardsTurned.push(turn[1]);
    checkCards();

});
turn[2].addEventListener('click', () => {
    turn[2].classList.add("shown");
    checkResult.push(turn[2].innerText);
    cardsFlippen++;
    cardsTurned.push(turn[2]);
    checkCards();

});
turn[3].addEventListener('click', () => {
    turn[3].classList.add("shown");
    checkResult.push(turn[3].innerText);
    cardsFlippen++;
    cardsTurned.push(turn[3]);
    checkCards();
});