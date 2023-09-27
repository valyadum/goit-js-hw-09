import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSubmit = document.querySelector('.form');

let delay;
let position;
formSubmit.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const number = Number(form.elements.amount.value);
    const firstDelay = Number(form.elements.delay.value);
    const stepDelay = Number(form.elements.step.value);
    delay = firstDelay;
    //position = 1;
    if (stepDelay < 0 || firstDelay < 0 || number <= 0) {
        Notify.warning('Введіть дані більше 0!');
        return;
    }

    for (position = 1; position <= number; position++) {
        createPromise(position, delay)
            .then(
            promiseSuccess
            )
            .catch(
                promiseError
            );
        delay += stepDelay;
    }
}



function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise ${position} in ${delay}ms`);
            }
        }, delay);
    })

}

function promiseSuccess(result) {
    // console.log('promiseSuccess');
    Notify.success(result);
}
function promiseError(result) {
    // console.log('promiseError');
    Notify.failure(result);
}