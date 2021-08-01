let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlider = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides} )`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlider--;
    if(currentSlider < 0) {
        currentSlider = totalSlides - 1;
    }
    updateMargin()

}

function goNext() {
    currentSlider++;
    if(currentSlider > (totalSlides -1)) {
        currentSlider = 0;
    }
    updateMargin();

}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlider * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;

}

const imageElements = document.querySelectorAll('.noanimation');

window.onscroll = function() {
    for (let element of imageElements) {
        checkVisible(element) ? addAnimation(element) : removeAnimation(element);
    }
    
};
  
  function checkVisible(elementTarget) {
    let rect = elementTarget.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  function addAnimation(element) {
      element.classList.add('animation');
  }

  function removeAnimation(element) {
      element.classList.remove('animation');
  }

//setInterval(goNext, 6000);