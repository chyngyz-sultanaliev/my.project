let cover = document.querySelector('.open');
let modal = document.querySelector('.modal');
closeBtn = document.querySelector('.close');
let overlay = document.querySelector('.overlay');
cover.addEventListener('click', function() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
});
let btn = document.querySelector('.submit-button');
btn.addEventListener('click', function() {
    alert(  'ЗАЯВКУ ОТПРАВИТЬ?')
});
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  overlay.style.display = 'none ';
});
