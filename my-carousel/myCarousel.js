const slides = document.querySelectorAll('.my-carousel__slide');
const previousButton = document.querySelector('.my-carousel__button--left');
const nextButton = document.querySelector('.my-carousel__button--right');
const nav = document.querySelector('.my-carousel__nav');
const indicators = nav.querySelectorAll('.my-carousel__indicator');
const slideSpeed = 500;
let currentSlide = 0;
let isClickable = true;

// arrange the slides
slides.forEach((slide, index) => {
  if(index === 0) {
    slide.classList.add('current-slide');
  } else if(index === 1) {
    slide.classList.add('put-to-right');
  } else if(index === slides.length - 1) {
    slide.classList.add('put-to-left');
  } else {
    slide.classList.add('put-to-back');
  }
});
indicators[0].classList.add('current-indicator')

// when I click left, move slides to the left
previousButton.addEventListener('click', () => {
  if(!isClickable) {
    return;
  }

  // clear animation
  slides.forEach(slide => {
    slide.classList.remove('move-animation');
  });

  // clear indicartor 
  indicators.forEach(indicator => {
    indicator.classList.remove('current-indicator');
  });
  
  // move top slide
  if(currentSlide - 2 < 0) {
    slides[slides.length + currentSlide - 2].classList.remove('put-to-back');
    slides[slides.length + currentSlide - 2].classList.add('put-to-left');
  } else {
    slides[currentSlide - 2].classList.remove('put-to-back');
    slides[currentSlide - 2].classList.add('put-to-left');
  }

  // move left slide
  if(currentSlide === 0) {
    slides[slides.length - 1].classList.remove('put-to-left');
    slides[slides.length - 1].classList.add('current-slide');
    slides[slides.length - 1].classList.add('move-animation');
  } else {
    slides[currentSlide - 1].classList.remove('put-to-left');
    slides[currentSlide - 1].classList.add('current-slide');
    slides[currentSlide - 1].classList.add('move-animation');
  }

  // move current slide 
  slides[currentSlide].classList.remove('current-slide');
  slides[currentSlide].classList.add('put-to-right');
  slides[currentSlide].classList.add('move-animation');

  // move right slide
  if(currentSlide === slides.length - 1) {
    slides[0].classList.remove('put-to-right');
    slides[0].classList.add('put-to-back');
  } else {
    slides[currentSlide + 1].classList.remove('put-to-right');
    slides[currentSlide + 1].classList.add('put-to-back');
  }

  if(currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  indicators[currentSlide].classList.add('current-indicator');

  isClickable = false;
  setTimeout(() => {
    isClickable = true;
  }, slideSpeed);
});


// when I click right, move slides to the right
nextButton.addEventListener('click', () => {
  if(!isClickable) {
    return;
  }

  // clear indicator 
  indicators.forEach(indicator => {
    indicator.classList.remove('current-indicator');
  });

  // clear animation
  slides.forEach(slide => {
    slide.classList.remove('move-animation');
  });
  
  // move top slide
  if(currentSlide + 2 > slides.length - 1) {
    slides[0 + currentSlide + 2 - slides.length].classList.remove('put-to-back');
    slides[0 + currentSlide + 2 - slides.length].classList.add('put-to-right');
  } else {
    slides[currentSlide + 2].classList.remove('put-to-back');
    slides[currentSlide + 2].classList.add('put-to-right');
  }

  // move right slide
  if(currentSlide === slides.length - 1) {
    slides[0].classList.remove('put-to-right');
    slides[0].classList.add('current-slide');
    slides[0].classList.add('move-animation');
  } else {
    slides[currentSlide + 1].classList.remove('put-to-right');
    slides[currentSlide + 1].classList.add('current-slide');
    slides[currentSlide + 1].classList.add('move-animation');
  }

  // move current slide 
  slides[currentSlide].classList.remove('current-slide');
  slides[currentSlide].classList.add('put-to-left');
  slides[currentSlide].classList.add('move-animation');

  // move left slide
  if(currentSlide === 0) {
    slides[slides.length - 1].classList.remove('put-to-left');
    slides[slides.length - 1].classList.add('put-to-back');
  } else {
    slides[currentSlide - 1].classList.remove('put-to-left');
    slides[currentSlide - 1].classList.add('put-to-back');
  }

  if(currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  indicators[currentSlide].classList.add('current-indicator');

  isClickable = false;
  setTimeout(() => {
    isClickable = true;
  }, slideSpeed);
});

// when I click the nav indicators, move to that slide
nav.addEventListener('click', e => {
    let clickedIndicator;
    
    // clear indicator 
    indicators.forEach(indicator => {
      indicator.classList.remove('current-indicator');
    });

    indicators.forEach((indicator, index) => {
      if(indicator === e.target) {
        clickedIndicator = index;
      }
    });

    if(clickedIndicator < currentSlide) {
      console.log('previous');
    }

    if(clickedIndicator > currentSlide) {
      console.log('next');
    }

    e.target.classList.add('current-indicator');
});