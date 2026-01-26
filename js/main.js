document.querySelectorAll('.menu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('active');
  });
});