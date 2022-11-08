/* Imports */
import { renderGem } from './render-utils.js';
/* Get DOM Elements */
const defeatedNumberEl = document.querySelector('#defeated-number');
const crystalgemHpEl = document.querySelector('#crystalgem-hp');
const cystalgemImgEl = document.querySelector('#crystalgem-img');
const form = document.querySelector('form');
const hwgemListEl = document.querySelector('.homeworld-gems');

/* State */
let defeatedhwGemsCount = 0;
let playerHP = 10;
let hwGems = [
    { id: 1, name: 'Peridot', hp: 1 },
    { id: 2, name: 'Jasper', hp: 4 },
];
let currentId = 3;

/* Events */
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const hwgemName = data.get('hwgem-name');

    const newhwGem = {
        id: currentId,
        name: hwgemName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;
});

/* Display Functions */
function hwgemClickHandler(hwgemData) {
    if (hwgemData.hp <= 0) return;
    if (Math.random() < 0.33) {
        hwgemData.hp--;
        alert('you hit' + hwgemData.name);
    } else {
        alert('you tried to hit ' + hwgemData.name + 'but missed');
    }
    if (Math.random() < 0.5) {
        playerHP--;
        alert(hwgemData.name + 'hit you!');
    } else {
        alert(hwgemData.name + 'tried to hit you but missed!');
    }
    if (hwgemData.hp === 0) {
        defeatedhwGemsCount++;
    }
    if (playerHP === 0) {
        cystalgemImgEl.classList.add('game-over');
        alert('Game Over!!');
    }
    crystalgemHpEl.textContent = playerHP;
    defeatedNumberEl.textContent = defeatedhwGemsCount;

    const hpEl = document.getElementById(`hwgem-hp-${hwgemData.id}`);
    hpEl.textContent = hwgemData.hp < 0 ? 0 : hwgemData.hp;
}


// (don't forget to call any display functions you want to run on page load!)
