const button = document.getElementById('toggle-dark-mode');
button.addEventListener('click', () => {  document.body.classList.toggle('dark-mode');
  button.textContent = document.body.classList.contains('dark-mode')
    ? 'Désactiver le mode sombre'
    : 'Activer le mode sombre';
});

