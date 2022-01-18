const mobile = {
  init: (div) => {
    div.appendChild(mobile.mainMenu());
  },

  // create a main menu section at top of the display
  mainMenu: () => {
    const mainMenuDiv = document.createElement('div');
    mainMenuDiv.classList.add('main-menu-div');
    mainMenuDiv.appendChild(mobile.hamburger());
    return mainMenuDiv;
  },

  // generate hamburger menu
  hamburger: () => {
    const hamburgerDiv = document.createElement('div');
    hamburgerDiv.classList.add('hamburger-div');
    const hamburgerIcon = document.createElement('img');
    hamburgerIcon.classList.add('hamburger-icon');
    hamburgerIcon.src = 'https://openclipart.org/image/2000px/221605';
    hamburgerIcon.addEventListener('click', mobile.openSidebar);
    hamburgerDiv.appendChild(hamburgerIcon);
    return hamburgerDiv;
  },

  // a page of menu items slides in from the side
  openedSidebar: false,
  openSidebar: () => {
    if (mobile.openedSidebar === false) {
      const sidebarDiv = document.createElement('div');
      sidebarDiv.append(mobile.sidebarList(mobile.menuList));
      sidebarDiv.classList.add('sidebar-div');
      setTimeout(() => { sidebarDiv.classList.add('slide-in'); }, 1);
      mobile.openedSidebar = true;
      const bodyDiv = document.querySelector('.body-div');
      bodyDiv.appendChild(sidebarDiv);
      bodyDiv.addEventListener('click', mobile.outsideSidebar);
      return;
    }
    mobile.closeSidebar();
  },

  // slide the menu out of window and close it
  closeSidebar: () => {
    const removeSidebarDiv = document.querySelector('.sidebar-div');
    removeSidebarDiv.classList.remove('slide-in');
    const bodyDiv = document.querySelector('.body-div');
    bodyDiv.removeEventListener('click', mobile.test);
    mobile.openedSidebar = false;
    setTimeout(() => { bodyDiv.removeChild(removeSidebarDiv); }, 150);
  },

  // clicking anywhere outside sidebar also closes sidebar
  outsideSidebar: (e) => {
    const sidebar = e.target.classList[0];
    if (
      mobile.openedSidebar
      && sidebar !== 'sidebar-div'
      && sidebar !== 'hamburger-icon'
    ) {
      mobile.closeSidebar();
    }
  },

  menuList: ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6'],
  sidebarList: (list) => {
    const sidebarMenuList = document.createElement('div');
    sidebarMenuList.classList.add('sidebar-menu-list');
    for (let i = 0; i < list.length; i += 1) {
      const item = document.createElement('div');
      item.classList.add('sidebar-list');
      item.textContent = list[i];
      sidebarMenuList.appendChild(item);
    }
    return sidebarMenuList;
  },
};

export default mobile.init;
