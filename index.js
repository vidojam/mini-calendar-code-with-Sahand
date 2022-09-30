const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

// console.log(date);
// console.log(date.getDate()); //get number
// console.log(date.getMonth()); //get month
// console.log(date.getFullYear()); // get year

const date = new Date();
const month = date.getMonth()
monthNameEl.innerText = date.toLocaleString("en", {
    month:"long"
})

dayNameEl.innerText = date.toLocaleString("en", {
    weekday:"long"
})

dayNumEl.innerText = date.getDate()

yearEl.innerText = date.getFullYear()



