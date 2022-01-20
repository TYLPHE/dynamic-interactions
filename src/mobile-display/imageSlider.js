const image = {
  init: (div) => {
    const exportDiv = document.createElement('div');
    exportDiv.classList.add('export-div');
    exportDiv.append(image.mainImage(), image.imageButtons());
    div.appendChild(exportDiv);
  },

  mainImage: () => {
    const mainImageDiv = document.createElement('div');
    mainImageDiv.classList.add('main-image-div');
    mainImageDiv.textContent = 'main-image-div';
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
    console.log('scroll-left');
  },

  scrollRight: () => {
    console.log('scroll-right');
  },
};

export default image.init;
