const dropdown = document.querySelector('.js-dropdown');
const dropdownValue = dropdown.querySelector('.js-dropdown-value');
const dropdownOptions = dropdown.querySelector('.js-dropdown-options');

dropdown.addEventListener('click', (event) => {
  if (event.target === dropdown) {
    dropdown.classList.toggle('is-opened');
  }

  if (event.target.classList.contains('js-dropdown-option')) {
    dropdownValue.innerText = event.target.innerText;
    dropdown.classList.remove('is-opened');
  }
});
