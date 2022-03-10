import imageArray from '../imageArray';

const image = {
  // left/active/right are the index positions of imageArray
  activeImage: 0,
  leftImage: 0,
  rightImage: 0,

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
    const imageSliderCenter = document.createElement('img');
    imageSliderCenter.classList.add('image-slider-center');
    imageSliderCenter.src = imageArray[image.activeImage];
    const imageSliderLeft = document.createElement('img');
    imageSliderLeft.classList.add('image-slider-left');
    imageSliderLeft.src = imageArray[image.activeImage];
    const imageSliderRight = document.createElement('img');
    imageSliderRight.classList.add('image-slider-right');
    imageSliderRight.src = imageArray[image.activeImage];
    mainImageDiv.append(imageSliderLeft, imageSliderCenter, imageSliderRight);
    return mainImageDiv;
  },

  imageButtons: () => {
    const leftButton = document.createElement('button');
    leftButton.type = 'button';
    leftButton.textContent = '<<';
    leftButton.onclick = () => image.switchLeft();
    const rightButton = document.createElement('button');
    rightButton.type = 'button';
    rightButton.textContent = '>>';
    rightButton.onclick = () => image.switchRight();
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');
    buttonDiv.append(leftButton, rightButton);
    return buttonDiv;
  },

  imageAssignment: (/* 'left', 'right', or 'none' */ direction) => {
    if (direction === 'right') {
      if (image.activeImage === 0) {
        image.activeImage = imageArray.length - 1;
        image.leftImage = imageArray.length - 2;
        image.rightImage = 0;
      } else {
        image.activeImage -= 1;
        if (image.activeImage === 0) {
          image.leftImage = imageArray.length - 1;
        } else {
          image.leftImage = image.activeImage - 1;
        }
        image.rightImage = image.activeImage + 1;
      }
    } else if (direction === 'left') {
      if (image.activeImage === imageArray.length - 1) {
        image.activeImage = 0;
        image.leftImage = imageArray.length - 1;
        image.rightImage = image.activeImage + 1;
      } else {
        image.activeImage += 1;
        if (image.activeImage === imageArray.length - 1) {
          image.rightImage = 0;
        } else {
          image.rightImage = image.activeImage + 1;
        }
        image.leftImage = image.activeImage - 1;
      }
    } else if (direction === 'none') {
      image.leftImage = image.activeImage - 1;
      image.rightImage = image.activeImage + 1;
      if (image.activeImage === 0) {
        image.leftImage = imageArray.length - 1;
        image.rightImage = image.activeImage + 1;
      }
      if (image.activeImage === imageArray.length - 1) {
        image.rightImage = 0;
        image.leftImage = image.activeImage - 1;
      }
    }
    const left = document.querySelector('.image-slider-left');
    const center = document.querySelector('.image-slider-center');
    const right = document.querySelector('.image-slider-right');
    left.src = imageArray[image.leftImage];
    center.src = imageArray[image.activeImage];
    right.src = imageArray[image.rightImage];
  },

  switchLeft: () => {
    const mainImageDiv = document.querySelector('.main-image-div');
    mainImageDiv.classList.add('shift-left');
    setTimeout(() => {
      image.imageAssignment('left');
      image.updateNavDots();
      mainImageDiv.classList.remove('shift-left');
    }, 300);
  },

  switchRight: () => {
    const mainImageDiv = document.querySelector('.main-image-div');
    mainImageDiv.classList.add('shift-right');
    setTimeout(() => {
      image.imageAssignment('right');
      image.updateNavDots();
      mainImageDiv.classList.remove('shift-right');
    }, 300);
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
    image.imageAssignment('none');
    image.updateNavDots();
  },
};

export default image.init;
