
const formSubmit = document.querySelector('.form');
let position = 0;
let delay;

formSubmit.addEventListener('submit', createPromise);

function createPromise(event, position, delay) {
    event.preventDefault();
    const form = event.currentTarget;
    const number = Number(form.elements.amount.value);
    const firstDelay = Number(form.elements.delay.value);
    const stepDelay = Number(form.elements.step.value);
    console.log(number, firstDelay, stepDelay);
    delay = firstDelay;


    for (let position = 1; position <= number; position++) {
        return new Promise((resolve, reject) => {
            const shouldResolve = Math.random() > 0.3;
            setTimeout(() => {
                if (shouldResolve) {
                    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
                } else {
                    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
                }
            }, delay);
            delay += stepDelay;
        })     
    }






    // return new Promise((resolve, reject) => {
    //     const shouldResolve = Math.random() > 0.3;
    //     delay = firstDelay;
    //     for (let position = 1; position <= number; position++) {
    //         console.log(`${position} ${delay}`);
    //         setTimeout(() => {
    //             if (shouldResolve) {
    //                 console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    //             } else {
    //                 console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    //             }
    //         }, delay);
    //         delay += stepDelay;
    //     }
    // })

}


function handleSubmit(event) {
    console.log('hi');
    event.preventDefault();
    const form = event.currentTarget;
    const number = form.elements.amount.value;
    const firstDelay = form.elements.delay.value;
    const stepDelay = form.elements.step.value;
    console.log(number, firstDelay, stepDelay);
}
// createPromise(2, 1500)
//     .then(
//         promiseSuccess
//     )
//     .catch(
//         promiseError
//     );
// function promiseSuccess(result) {
//     console.log('promiseSuccess');
//     console.log(result);
// }
// function promiseError(result) {
//     console.log('promiseError');
//     console.log(result);
// }