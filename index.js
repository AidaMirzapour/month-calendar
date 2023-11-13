//select
let monthEl = document.querySelector(".monthName");
let dateEl = document.querySelector(".fullDate");
let daysEl = document.querySelector(".days");
//p date
let date = new Date().toDateString();
dateEl.innerHTML = date;
//h month name
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let thisMonth = new Date().getMonth();
monthEl.innerHTML = months[thisMonth];
//last and first day
let lastDay = new Date(new Date().getFullYear(), thisMonth + 1, 0).getDate();
let firstDay = new Date(new Date().getFullYear(), thisMonth, 1).getDay();
let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    } else{
        days += `<div>${i}</div>`; 
    }
}
daysEl.innerHTML = days;
