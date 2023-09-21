function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

stopBtn.setAttribute("disabled", "disabled");
function changeColor(el) {
 timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
    }, 1000);
    startBtn.setAttribute("disabled", "disabled");
    stopBtn.removeAttribute("disabled", "disabled");
};
function stopChangeColor() {
    clearInterval(timerId);
    stopBtn.setAttribute("disabled", "disabled");
    startBtn.removeAttribute("disabled", "disabled");
};
