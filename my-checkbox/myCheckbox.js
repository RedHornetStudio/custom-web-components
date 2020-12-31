const myCheckboxes = document.querySelectorAll('.my-checkbox');

myCheckboxes.forEach(myCheckbox => {
  const checkbox = document.querySelector(`#${myCheckbox.getAttribute('data-for')}`);
  const label = document.querySelector(`label[for="${myCheckbox.getAttribute('data-for')}"]`);

  myCheckbox.addEventListener('click', e => {
    if(checkbox.checked === true) {
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
  });

  myCheckbox.addEventListener('keydown', e => {
    if(e.key === ' ') {
      e.preventDefault();
      myCheckbox.classList.add('active');
    }
  });

  myCheckbox.addEventListener('keyup', e => {
    if(e.key === ' ') {
      myCheckbox.classList.remove('active');
      if(checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    }
  });

  myCheckbox.addEventListener('focusout', e => {
    myCheckbox.classList.remove('active');
  });

  label.addEventListener('click', () => {
    myCheckbox.focus();
  });
});