/// All Node Variables ///

let nwesltr_close = document.querySelector('#cross_newsltr');
let bg_newsltr = document.querySelector('#newsltr_bg');
let main_newsltr_div = document.querySelector('#newsltr_main');
let click_sm_nav = document.querySelector('#nav_sm');
let show_sm_nav = document.querySelector('#hidden_nav');
let cross_sm_nav = document.querySelector('#cross_nav');
let days = document.querySelector('#days');
let hours = document.querySelector('#hrs');
let mints = document.querySelector('#mins');
let secs = document.querySelector('#secs');

// For Newsletter

nwesltr_close.addEventListener('click', () => {
  bg_newsltr.classList.add('hidden');
  main_newsltr_div.classList.remove('flex');
  main_newsltr_div.classList.add('hidden');
  document.body.classList.remove('overflow-y-hidden');
});

// For Sm NavBar
click_sm_nav.addEventListener('click', () => {
  show_sm_nav.classList.remove('-left-full');
  show_sm_nav.classList.add('left-0');
  document.body.classList.add('overflow-y-hidden');
});
cross_sm_nav.addEventListener('click', () => {
  show_sm_nav.classList.remove('left-0');
  show_sm_nav.classList.add('-left-full');
  document.body.classList.remove('overflow-y-hidden');
});

/// For Count Down of Banner Section

const targetDate = new Date('December 31, 2023 23:59:59').getTime();

const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const currentDate = new Date().getTime();

  const remainingTime = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  days.innerHTML = `${days}`;
  hours.innerHTML = `${hours}`;
  mints.innerHTML = `${minutes}`;
  secs.innerHTML = `${seconds}`;

  // If the countdown is over, clear the interval
  if (remainingTime < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = 'Countdown expired!';
  }
}
