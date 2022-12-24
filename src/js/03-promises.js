

const refs = { 
  form: document.querySelector(".form"),
}

let position = 0;
let steps = 0;

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  console.log(delay.value, step.value, amount.value );

 
 const intervalId = setInterval(() => {
   if (position >= Number(amount.value)) {
    clearInterval(intervalId);
    return;
      }
   position += 1;
   steps += Number(step.value);
  createPromise(position, steps + Number(delay.value))
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  })}, delay.value)
  

});



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  })
}


