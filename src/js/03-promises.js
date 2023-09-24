
const formSubmit = document.querySelector('.form');
// const delay = document.querySelector('input delay');
// const step = document.querySelector('input step');
// const amount = document.querySelector('input amount');
// const submitBtn = document.querySelector('button');




formSubmit.addEventListener('submit', createPromise);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  handleSubmit(number, firstDelay, stepDelay);

  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject   kkk
  }
}
function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const number = form.elements.amount.value;
  const firstDelay = form.elements.delay.value;
  const stepDelay = form.elements.step.value;
  console.log(number, firstDelay, stepDelay);
}