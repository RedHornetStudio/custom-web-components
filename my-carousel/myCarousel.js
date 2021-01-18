const slides = document.querySelectorAll('.my-carousel__slide');
const previousButton = document.querySelector('.my-carousel__button--left');
const nextButton = document.querySelector('.my-carousel__button--right');
const nav = document.querySelector('.my-carousel__nav');
const indicators = nav.querySelectorAll('.my-carousel__indicator');
const slideSpeed = 500;
const slideIntervalSpeed = 10000;
let currentSlideIndex = 0;
let isClickable = true;
let slideInterval;

const moveSlideFromRight = () => {
  if(!isClickable) {
    return;
  }

  let nextSlide;
  let currentSlide = slides[currentSlideIndex];
  if(currentSlideIndex === slides.length - 1) {
    nextSlide = slides[0];
  } else {
    nextSlide = slides[currentSlideIndex + 1];
  }

  nextSlide.classList.add('put-to-right');
  setTimeout(() => {
    currentSlide.classList.remove('put-to-top');
    currentSlide.classList.add('move-animation');
    currentSlide.classList.add('put-to-left');
    nextSlide.classList.add('move-animation');
    nextSlide.classList.add('put-to-top');
  }, 20);

  if(currentSlideIndex === slides.length - 1) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
  }
  indicators.forEach(indicator => {
    indicator.classList.remove('current-indicator');
  })
  indicators[currentSlideIndex].classList.add('current-indicator');

  isClickable = false;
  setTimeout(() => {
    slides.forEach(slide => {
      slide.classList.remove('put-to-left');
      slide.classList.remove('put-to-right');
      slide.classList.remove('move-animation');
    });
    isClickable = true;
  }, slideSpeed);
};

const moveSlideFromLeft = () => {
  if(!isClickable) {
    return;
  }

  let previousSlide;
  let currentSlide = slides[currentSlideIndex];
  if(currentSlideIndex === 0) {
    previousSlide = slides[slides.length - 1];
  } else {
    previousSlide = slides[currentSlideIndex - 1];
  }

  previousSlide.classList.add('put-to-left');
  setTimeout(() => {
    currentSlide.classList.remove('put-to-top');
    currentSlide.classList.add('move-animation');
    currentSlide.classList.add('put-to-right');
    previousSlide.classList.add('move-animation');
    previousSlide.classList.add('put-to-top');
  }, 20);

  if(currentSlideIndex === 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex--;
  }
  indicators.forEach(indicator => {
    indicator.classList.remove('current-indicator');
  })
  indicators[currentSlideIndex].classList.add('current-indicator');

  isClickable = false;
  setTimeout(() => {
    slides.forEach(slide => {
      slide.classList.remove('put-to-left');
      slide.classList.remove('put-to-right');
      slide.classList.remove('move-animation');
    });
    isClickable = true;
  }, slideSpeed);
};

// move slides after some delay
slideInterval = setInterval(moveSlideFromRight, slideIntervalSpeed);

// when I click left, move slides from the left
previousButton.addEventListener('click', () => {
  moveSlideFromLeft();
  clearInterval(slideInterval);
  slideInterval = setInterval(moveSlideFromRight, slideIntervalSpeed);
});

// when I click right, move slides from the right
nextButton.addEventListener('click', () => {
  moveSlideFromRight();
  clearInterval(slideInterval);
  slideInterval = setInterval(moveSlideFromRight, slideIntervalSpeed);
});

// when I click the nav indicators, move to that slide
nav.addEventListener('click', e => {
  let clickedIndicatorIndex;

  indicators.forEach((indicator, index) => {
    if(indicator === e.target) {
      clickedIndicatorIndex = index;
    }
  });

  // clicking indicator smaller than current slide
  if(clickedIndicatorIndex < currentSlideIndex) {
    if(!isClickable) {
      return;
    }
  
    let clickedSlide = slides[clickedIndicatorIndex];
    let currentSlide = slides[currentSlideIndex];
  
    clickedSlide.classList.add('put-to-left');
    setTimeout(() => {
      currentSlide.classList.remove('put-to-top');
      currentSlide.classList.add('move-animation');
      currentSlide.classList.add('put-to-right');
      clickedSlide.classList.add('move-animation');
      clickedSlide.classList.add('put-to-top');
    }, 20);
  
    currentSlideIndex = clickedIndicatorIndex;
    indicators.forEach(indicator => {
      indicator.classList.remove('current-indicator');
    })
    indicators[currentSlideIndex].classList.add('current-indicator');
  
    isClickable = false;
    setTimeout(() => {
      slides.forEach(slide => {
        slide.classList.remove('put-to-left');
        slide.classList.remove('put-to-right');
        slide.classList.remove('move-animation');
      });
      isClickable = true;
    }, slideSpeed);

    clearInterval(slideInterval);
    slideInterval = setInterval(moveSlideFromRight, slideIntervalSpeed);
  }

  // clicking indicator greater than current slide
  if(clickedIndicatorIndex > currentSlideIndex) {
    if(!isClickable) {
      return;
    }
  
    let clickedSlide = slides[clickedIndicatorIndex];
    let currentSlide = slides[currentSlideIndex];
  
    clickedSlide.classList.add('put-to-right');
    setTimeout(() => {
      currentSlide.classList.remove('put-to-top');
      currentSlide.classList.add('move-animation');
      currentSlide.classList.add('put-to-left');
      clickedSlide.classList.add('move-animation');
      clickedSlide.classList.add('put-to-top');
    }, 20);
  
    currentSlideIndex = clickedIndicatorIndex;
    indicators.forEach(indicator => {
      indicator.classList.remove('current-indicator');
    })
    indicators[currentSlideIndex].classList.add('current-indicator');
  
    isClickable = false;
    setTimeout(() => {
      slides.forEach(slide => {
        slide.classList.remove('put-to-left');
        slide.classList.remove('put-to-right');
        slide.classList.remove('move-animation');
      });
      isClickable = true;
    }, slideSpeed);

    clearInterval(slideInterval);
    slideInterval = setInterval(moveSlideFromRight, slideIntervalSpeed);
  }
});