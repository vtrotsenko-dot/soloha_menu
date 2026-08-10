 
const MIN_SHOW_TIME = 800; // мінімум мс показу екрана (щоб не "блимало")
const startTime = Date.now();
 
window.addEventListener('load', () => {
  const elapsed = Date.now() - startTime;
  const delay = Math.max(0, MIN_SHOW_TIME - elapsed);
 
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
 
    preloader.classList.add('hidden');
    content.classList.add('visible');
 
    // прибираємо з DOM повністю, щоб не заважав кліками
    setTimeout(() => preloader.remove(), 500);
  }, delay);
});
 
// страховка: якщо подія 'load' з якоїсь причини не спрацює —
// прибрати preloader примусово через 8 секунд
setTimeout(() => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.remove();
}, 8000);
 