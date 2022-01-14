const mobile = {
  init: (div) => {
    div.appendChild(mobile.mainMenu());
  },

  // create a main menu section at top of the display
  mainMenu: () => {
    const mainMenuDiv = document.createElement('div');
    mainMenuDiv.classList.add('main-menu');
    mainMenuDiv.appendChild(mobile.hamburger());
    return mainMenuDiv;
  },

  // generate hamburger menu
  hamburger: () => {
    const hamburgerDiv = document.createElement('div');
    const hamburgerIcon = document.createElement('img');
    hamburgerIcon.classList.add('hamburger');
    hamburgerIcon.src = 'https://openclipart.org/image/2000px/221605';
    hamburgerIcon.addEventListener('click', mobile.sidebarMenu);
    hamburgerDiv.appendChild(hamburgerIcon);
    return hamburgerDiv;
  },

  // a page of menu items slides in from the side
  sidebarMenu: () => {
    console.log('TODO: add expand here');
  },
};

export default mobile.init;
