const toggleButton = document.getElementById('toggleMode');
const modeIcon = document.getElementById('modeIcon');
const modeText = document.getElementById('modeText');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  modeIcon.textContent = isDark ? '☀️' : '🌙';
  modeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});
