const myDropdownMenu = document.querySelector('.my-dropdown-menu');
const selected = myDropdownMenu.querySelector('.selected');
const options = myDropdownMenu.querySelector('.options');
const optionsList = options.querySelectorAll('.option');
const arrow = myDropdownMenu.querySelector('.arrow');

let activeOption;
myDropdownMenu.addEventListener('click', () => {
  if(options.classList.contains('show')) {
    options.classList.remove('show');
    arrow.classList.remove('rotate-up');
  } else {
    options.classList.add('show');
    arrow.classList.add('rotate-up');
    optionsList.forEach(option => {
      option.classList.remove('active-option');
    });
    optionsList.forEach(option => {
      if(option.textContent === selected.textContent) {
        activeOption = option;
      }
    });
    activeOption.classList.add('active-option');
  }
});

myDropdownMenu.addEventListener('keyup', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    if(options.classList.contains('show')) {
      options.classList.remove('show');
      arrow.classList.remove('rotate-up');
      selected.textContent = activeOption.textContent;
    } else {
      options.classList.add('show');
      arrow.classList.add('rotate-up');
      optionsList.forEach(option => {
        option.classList.remove('active-option');
      });
      optionsList.forEach(option => {
        if(option.textContent === selected.textContent) {
          activeOption = option;
        }
      });
      activeOption.classList.add('active-option');
    }
  }
});

myDropdownMenu.addEventListener('keydown', e => {
  if(e.key === ' ') {
    e.preventDefault();
  }
  if(e.key === 'ArrowDown') {
    e.preventDefault();
    optionsList.forEach(option => {
      option.classList.remove('active-option');
    });
    if(activeOption && activeOption.nextElementSibling) {
      activeOption = activeOption.nextElementSibling;
    } else {
      activeOption = optionsList[0]
    }
    activeOption.classList.add('active-option');
  }
  if(e.key === 'ArrowUp') {
    e.preventDefault();
    optionsList.forEach(option => {
      option.classList.remove('active-option');
    });
    if(activeOption && activeOption.previousElementSibling) {
      activeOption = activeOption.previousElementSibling;
    } else {
      activeOption = optionsList[optionsList.length - 1];
    }
    activeOption.classList.add('active-option');
  }
});

myDropdownMenu.addEventListener('focusout', () => {
  options.classList.remove('show');
  arrow.classList.remove('rotate-up');
});

options.addEventListener('mousemove', e => {
    optionsList.forEach(option => {
      option.classList.remove('active-option');
    });
    activeOption = e.target;
    activeOption.classList.add('active-option');
});

options.addEventListener('mouseover', e => {
  optionsList.forEach(option => {
    option.classList.remove('active-option');
  });
  activeOption = e.target;
  activeOption.classList.add('active-option');
});

options.addEventListener('click', e => {
  selected.textContent = activeOption.textContent;
});