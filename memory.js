const turn = document.querySelectorAll('.hidden');
let cardsFlippen = 0;
let checkResult = [];
let cardsTurned = [];
let cardsToTurn = 4;

document.getElementById('message').innerHTML = `Missing ${cardsToTurn} Cards`;

checkWin = () => {
    if (cardsToTurn === 0) {

        alert("You Win")
    }
}
checkCards = () => {
    if (cardsFlippen === 2) {
        if (checkResult[0] === checkResult[1]) {
            checkResult = [];
            cardsFlippen = 0;
            cardsToTurn = cardsToTurn - 2;
            document.getElementById('message').innerHTML = `Missing ${cardsToTurn} Cards`;
            checkWin();

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
    if (turn[0].classList.contains("shown")) {
        return;
    } else {
        turn[0].classList.add("shown");
        checkResult.push(turn[0].innerText);
        cardsFlippen++;
        cardsTurned.push(turn[0]);
        checkCards();
    }
});
turn[1].addEventListener('click', () => {
    if (turn[1].classList.contains("shown")) {
        return;
    } else {
        turn[1].classList.add("shown");
        checkResult.push(turn[1].innerText);
        cardsFlippen++;
        cardsTurned.push(turn[1]);
        checkCards();
    }
});
turn[2].addEventListener('click', () => {
    if (turn[2].classList.contains("shown")) {
        return;
    } else {
        turn[2].classList.add("shown");
        checkResult.push(turn[2].innerText);
        cardsFlippen++;
        cardsTurned.push(turn[2]);
        checkCards();
    }

});
turn[3].addEventListener('click', () => {
    if (turn[3].classList.contains("shown")) {
        return;
    } else {
        turn[3].classList.add("shown");
        checkResult.push(turn[3].innerText);
        cardsFlippen++;
        cardsTurned.push(turn[3]);
        checkCards();
    }
});