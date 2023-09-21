import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const day = document.querySelector('span[data-days]');
const hour = document.querySelector('span[data-hours]');
const minute = document.querySelector('span[data-minutes]');
const second = document.querySelector('span[data-seconds]');
let choseTime;
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
         choseTime = Number(selectedDates[0].getTime());
        if (selectedDates[0].getTime() <= Date.now()) {
            Notify.failure('Please choose a date in the future');
            //window.alert("Please choose a date in the future");
        }
        else {
            startBtn.removeAttribute("disabled", "disabled");   
        }
    },
};

startBtn.setAttribute("disabled", "disabled");
flatpickr('input#datetime-picker', options);
startBtn.addEventListener('click', calcTime);

// const timer = {
//     start(selectedDates) {
//         const currentTime = Date.now();
//         const choseTime = selectedDates[0].getTime();
//         console.log(choseTime);
//     }
// }
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days =addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
function calcTime() {
    // console.log(choseTime);
    startBtn.setAttribute("disabled", "disabled");
    intervalId = setInterval(() => {
        let differentTime = convertMs(choseTime - Date.now()); 
    
        let deltaTime = choseTime - Date.now();
        console.log(deltaTime);
        if (deltaTime < 0 ) {
        //window.alert('Finish');
         Notify.success('Hooray!! The event has begun!');
         clearInterval(intervalId);
        return;
    }
      
            day.textContent = `${differentTime.days}`;
            hour.textContent = `${differentTime.hours}`;
            minute.textContent = `${differentTime.minutes}`;
            second.textContent = `${differentTime.seconds}`;
           
        
    },1000)
   
    
    
}
