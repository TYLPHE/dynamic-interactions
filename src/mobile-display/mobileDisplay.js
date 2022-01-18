const mobile = {
  // list of menu names
  menuList: ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6'],

  // displays active menu at top of screen
  activeMenuName: '',

  // indicates if sidebar is open
  openedSidebar: false,

  init: (div) => {
    div.appendChild(mobile.mainMenu());
  },

  // create a main menu section at top of the display
  mainMenu: () => {
    const mainMenuTitle = document.createElement('div');
    mainMenuTitle.classList.add('main-menu-title');
    const topFlex = document.createElement('div');
    topFlex.classList.add('top-flex');
    topFlex.append(mobile.hamburger(), mainMenuTitle);
    const botFlex = document.createElement('div');
    botFlex.appendChild(mobile.botFlexMenus(mobile.menuList, 0, 1, 2));
    const mainMenuDiv = document.createElement('div');
    mainMenuDiv.classList.add('main-menu-div');
    mainMenuDiv.append(topFlex, botFlex);
    mainMenuTitle.textContent = mobile.activeMenuName;
    return mainMenuDiv;
  },

  // select 3 main tabs to see under hamburger icon
  botFlexMenus: (
    /* array */ arr,
    /* array index number */ pos1,
    /* array index number */ pos2,
    /* array index number */ pos3,
  ) => {
    const left = document.createElement('div');
    left.textContent = arr[pos1];
    left.classList.add('left');
    left.addEventListener('click', (e) => mobile.activatedMenu(e));
    const center = document.createElement('div');
    center.textContent = arr[pos2];
    center.classList.add('center');
    center.addEventListener('click', (e) => mobile.activatedMenu(e));
    const right = document.createElement('div');
    right.textContent = arr[pos3];
    right.classList.add('right');
    right.addEventListener('click', (e) => mobile.activatedMenu(e));
    const botFlexChild = document.createElement('div');
    botFlexChild.classList.add('bot-flex-child');
    botFlexChild.append(left, center, right);
    mobile.activeMenuName = arr[pos1];
    return botFlexChild;
  },

  // generate and swipe to selected menu
  activatedMenu: (e) => {
    mobile.activeMenuName = e.target.innerText;
    const title = document.querySelector('.main-menu-title');
    title.textContent = mobile.activeMenuName;
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
