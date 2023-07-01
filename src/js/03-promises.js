import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const handlePromise = (e) => {
  e.preventDefault(); // Забороняємо перезавантаження сторінки

  // Отримуємо значення полів форми
  const delay = parseInt(delayEl.value);
  const step = parseInt(stepEl.value);
  const amount = parseInt(amountEl.value);

  // Запускаємо цикл для створення промісів
  for (let i = 1; i <= amount; i += 1) {
    const position = i;
    const promiseDelay = delay + (i - 1) * step;

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

formEl.addEventListener('submit', handlePromise);



