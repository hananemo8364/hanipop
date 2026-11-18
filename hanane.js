const mosbat = document.querySelector('.counter_button.counter_button--increase');
mosbat.addEventListener('click' , function() {
  const sefr = document.querySelector('.counter_value');
  sefr.textContent++
});

const manfi = document.querySelector('.counter_button.counter_button--decrease');
manfi.addEventListener('click' , function () {
    const sefr = document.querySelector('.counter_value');
    sefr.textContent--
});

const sefr = document.querySelector('.counter_value');
  if (sefr.textContent < 0 )
  {sefr.textContent = 0;}

const reset = document.querySelector('.counter_reset-button');
reset.addEventListener('click' , function() {
    const sefr = document.querySelector('.counter_value');
    sefr.textContent = 0
});





