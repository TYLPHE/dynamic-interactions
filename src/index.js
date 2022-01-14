import './style.css';
import mobileDisplay from './mobile-display/mobileDisplay';

const index = {
  init: () => {
    // attach to body
    document.body.append(
      index.titleDiv(),
      index.aboutDiv(),
      index.bodyDiv(),
    );
  },

  // title and avatar
  titleDiv: () => {
    const titleDiv = document.createElement('a');
    titleDiv.href = 'https://github.com/TYLPHE';
    titleDiv.classList.add('title');
    titleDiv.target = '_blank';
    const avatar = document.createElement('img');
    avatar.src = 'https://avatars.githubusercontent.com/u/85977718?v=4';
    avatar.classList.add('avatar');
    const title = document.createElement('div');
    title.innerText = 'Dynamic Interactions by TYLPHE';
    title.classList.add('title-text');
    titleDiv.append(avatar, title);
    return titleDiv;
  },

  // create a mobile phone body and generate contents
  bodyDiv: () => {
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body');
    mobileDisplay(bodyDiv);
    return bodyDiv;
  },

  // about project section
  aboutDiv: () => {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');
    const aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About this project';
    const aboutParagraph1 = document.createElement('p');
    aboutParagraph1.textContent = 'This page is designed for practicing everyday techniques used by JavaScript programmers.';
    const aboutParagraph2 = document.createElement('a');
    aboutParagraph2.textContent = 'Objectives:';
    aboutParagraph2.href = 'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/dynamic-user-interface-interactions';
    aboutParagraph2.target = '_blank';
    const unorderedList = document.createElement('ul');
    const list = ['Dropdown Menu', 'Mobile Menu', 'Image slider'];
    function generateList(/* array */ arr) {
      for (let i = 0; i < arr.length; i += 1) {
        const listItem = document.createElement('li');
        listItem.textContent = arr[i];
        unorderedList.appendChild(listItem);
      }
    }
    generateList(list);
    aboutDiv.append(
      aboutTitle,
      aboutParagraph1,
      aboutParagraph2,
      unorderedList,
    );
    return aboutDiv;
  },
};

index.init();
