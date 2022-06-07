const TARGET1_BOX = document.querySelector("#box1")
const TARGET2_BOX = document.querySelector("#box2")
const START_BTN = document.querySelector("#startButton")
const FINAL_MESSAGE = document.querySelector("#finalMessage")

let num1
let num2
let bigNum

function startGame () {
    TARGET1_BOX.disabled = true
    TARGET2_BOX.disabled = true
    START_BTN.innerText = "Reset"

    bigNum = 0
    num1 = TARGET1_BOX.value
    num2 = TARGET2_BOX.value

    if (num1 < num2) {
        bigNum = num2
    }

    else {
        bigNum = num1
    }

    FINAL_MESSAGE.innerText = "The Larger number is " + bigNum
}

function resetGame () {
    TARGET1_BOX.disabled = false
    TARGET2_BOX.disabled = false
    START_BTN.innerText = "Start"
    FINAL_MESSAGE.innerText = ""
}

function comparison () {
    if (TARGET1_BOX.disabled && TARGET2_BOX.disabled) {
        resetGame()
    } 
    else {
        startGame()
    }
}

START_BTN.addEventListener('click', comparison)
