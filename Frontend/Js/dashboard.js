document.querySelector('#logout-btn').addEventListener('click', () => {
  localStorage.clear();
  window.location.href = '/';
});

