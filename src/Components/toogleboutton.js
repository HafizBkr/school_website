const toggleButton = document.getElementById('toggleButton');
const dropdownMenu = document.getElementById('dropdownMenu');

toggleButton.addEventListener('click', function () {
  dropdownMenu.classList.toggle('hidden');
  const isVisible = !dropdownMenu.classList.contains('hidden');
  toggleButton.textContent = isVisible ? 'Moins' : 'Plus';
});