import imageArray from '../imageArray';

const image = {
  // activeImage is the index position of imageArray
  activeImage: 0,

  // previous image to transition off screen
  previousImage: 0,

  init: (div) => {
    const exportDiv = document.createElement('div');
    exportDiv.classList.add('export-div');
    exportDiv.append(
      image.mainImage(),
      image.navigator(),
      image.imageButtons(),
    );
    div.appendChild(exportDiv);
  },

  mainImage: () => {
    const mainImageDiv = document.createElement('div');
    mainImageDiv.classList.add('main-image-div');
    const imageSliderDiv = document.createElement('img');
    imageSliderDiv.classList.add('image-slider-div');
    imageSliderDiv.src = imageArray[image.activeImage];
    mainImageDiv.appendChild(imageSliderDiv);
    return mainImageDiv;
  },

  imageButtons: () => {
    const leftButton = document.createElement('button');
    leftButton.type = 'button';
    leftButton.textContent = '<<';
    leftButton.onclick = () => image.scrollLeft();
    const rightButton = document.createElement('button');
    rightButton.type = 'button';
    rightButton.textContent = '>>';
    rightButton.onclick = () => image.scrollRight();
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');
    buttonDiv.append(leftButton, rightButton);
    return buttonDiv;
  },

  scrollLeft: () => {
    if (image.activeImage === 0) {
      image.previousImage = image.activeImage;
      image.activeImage = imageArray.length - 1;
    } else {
      image.previousImage = image.activeImage;
      image.activeImage -= 1;
    }
    const imageSliderDiv = document.querySelector('.image-slider-div');
    imageSliderDiv.src = imageArray[image.activeImage];
    image.updateNavDots();
  },

  scrollRight: () => {
    if (image.activeImage === imageArray.length - 1) {
      image.previousImage = image.activeImage;
      image.activeImage = 0;
    } else {
      image.previousImage = image.activeImage;
      image.activeImage += 1;
    }
    const imageSliderDiv = document.querySelector('.image-slider-div');
    imageSliderDiv.src = imageArray[image.activeImage];
    image.updateNavDots();
  },

  navigator: () => {
    const navigatorDiv = document.createElement('div');
    navigatorDiv.classList.add('navigator-div');
    for (let i = 0; i < imageArray.length; i += 1) {
      const dotDiv = document.createElement('div');
      dotDiv.classList.add('dot-div');
      dotDiv.addEventListener('click', (e) => image.jumpToDot(e));
      dotDiv.id = `dot-${i}`;
      if (i !== image.activeImage) {
        dotDiv.textContent = '◯';
      } else {
        dotDiv.textContent = '⚫';
      }
      navigatorDiv.appendChild(dotDiv);
    }
    return navigatorDiv;
  },

  updateNavDots: () => {
    for (let i = 0; i < imageArray.length; i += 1) {
      const updateDot = document.querySelector(`#dot-${i}`);
      if (updateDot.textContent === '⚫') {
        updateDot.textContent = '◯';
      }
      if (i === image.activeImage) {
        updateDot.textContent = '⚫';
      }
    }
  },

  jumpToDot: (e) => {
    const targetDot = e.target.id.slice(4);
    image.activeImage = parseInt(targetDot, 10);
    const imageSliderDiv = document.querySelector('.image-slider-div');
    imageSliderDiv.src = imageArray[image.activeImage];
    image.updateNavDots();
  },
};

export default image.init;
