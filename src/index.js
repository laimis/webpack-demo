import _ from 'lodash';

import './style.css';

import Icon from './icon.png';

import Data from './data.json';


function component() {
    const element = document.createElement("div");

    // Lodash, now imported by this script
    element.innerHTML = _.join(["Why would I want to create everything in javascript, lol", "webpack"], " ");
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    
    element.appendChild(myIcon);

    Data.daters.forEach(e => console.log(e.a));

    return element;
}

document.body.appendChild(component());