
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    inputEl : document.querySelector('input[type="text"]'),
 startBtn : document.querySelector('button[data-start]'),
 spanDays : document.querySelector('span[data-days]'),
 spanHours : document.querySelector('span[data-hours]'),
 spanMinutes : document.querySelector('span[data-minutes]'),
 spanSeconds : document.querySelector('span[data-seconds]'),

}




refs.startBtn.disabled = true;
     
 flatpickr('input[type="text"]', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
     onClose(selectedDates) {
        console.log(selectedDates[0]);
       /*  console.log(minuteIncrement)*/ 
        if (selectedDates[0] < new Date()) {
            window.alert("Please choose a date in the future");
            refs.startBtn.disabled = true;
        } else {
               refs.startBtn.disabled = false;
            refs.startBtn.addEventListener('click', (e) => {
                
                setInterval(() => {
                    const ms =  selectedDates[0] - Date.now() ;
                    const { days, hours, minutes, seconds } = convertMs(ms);
                    refs.spanDays.textContent = addLeadingZero(days);
                    refs.spanHours.textContent = addLeadingZero(hours);
                    refs.spanMinutes.textContent = addLeadingZero(minutes);
                    refs.spanSeconds.textContent = addLeadingZero(seconds);
        
                }, 1000)
            })
      }
  },
}) 




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    
  return { days, hours, minutes, seconds };
}

/* console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20} */

function addLeadingZero(value) {
   return String(value).padStart(2, "0") 
 } 