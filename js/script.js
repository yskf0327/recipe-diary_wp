const navButton = document.querySelector('.c-button-nav');
const bodyElm = document.querySelector('body');
const navLinks = document.querySelectorAll('.p-nav li a');

navButton.addEventListener('click', (e) => {
  bodyElm.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    console.log(link.href.match(/.*#.*/g));
    if (link.href.match(/.*#.*/g)) {
      bodyElm.classList.remove('open');
    }
  });
});
