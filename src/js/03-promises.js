

const refs = { 
  form: document.querySelector(".form"),
}

let position = 0;
let delay = 0;

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  console.log(delay.value, step.value, amount.value );

 
  setInterval(() => {
      if (position >= Number(amount.value) ) {
    return;
      }

    position += 1;

  
   createPromise(position, Number(delay.value) += Number(step.value) )
   }, delay.value)
  

});



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(console.log( position, delay ))
    } else {
      reject(console.log("error"))
    }
  })
}


/* Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів,
  скільки ввели в поле amount.Під час кожного виклику передай їй номер промісу(position), що створюється, і затримку,
    враховуючи першу затримку(delay), введену користувачем, і крок(step).
 */

/* 
Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. 
Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. 
Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.
 */
createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

