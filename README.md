# Dynamic Interactions
###### Extra JavaScript practice with image slider
![](https://github.com/TYLPHE/TYLPHE/blob/main/readmeAssets/dynamic-interactions.gif)

## Links
- [Try Dynamic Interactions here!](https://TYLPHE.github.io/dynamic-interactions/dist/)
- [Link to the assignment](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/dynamic-user-interface-interactions)

## Features
- Image slider
- Dropdown mobile menu

## About
This project is designed for practicing everyday techniques used by JavaScript programmers. I created a div to resemble a phone's screen. In addition to the image slider, users can click on the hamburger icon to slide a menu into the screen. 

The image slider pulls images from an array of image hyperlinks. The user may add as many image hyperlinks as they wish to customize the length of the slider. Clicking the previous and next buttons scrolls the images on and off screen to simulate a carousel. 

## Challenges
The biggest challenge in this project was the sliding animation. If you remove `overflow: hidden`, you will see that 2 other divs are preloading the previous and next image in the array. Clicking the previous/next button will assign a class that applies the CSS property, `transform: translate()` to shift the entire div for 300ms. After 300ms, the class is removed and the position is reset back to the original position. On the user's side,  
